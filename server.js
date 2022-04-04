import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
// cors middleware
app.use(
	cors({
		origin: "*",
		credentials: true,
	}),
);

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddleWare from "./middleware/not-found.js";
import ErrorHandlerMiddleWare from "./middleware/error-handler.js";

//express json middleware
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json("Welcome to the Job Board API.");
});

// route middleware
app.use(authRouter);
app.use(jobsRouter);

// middleware
app.use(notFoundMiddleWare);
app.use(ErrorHandlerMiddleWare);

//heroku deployment
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("./client/build"));
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

// port
const PORT = process.env.PORT || 7000;

// initializing server
// create async function to connect to db and start server
const startServer = async () => {
	try {
		connectDB(process.env.MONGO_URL);
	} catch (error) {
		console.log(error);
	} finally {
		setTimeout(() => {
			app.listen(PORT, () => {
				console.log(`Server started on port ${PORT}`);
			});
		}, 5000);
	}
};
startServer();
