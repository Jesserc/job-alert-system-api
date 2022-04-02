// create user model and export it to server.js
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

// set up mongoose hook to allow password hashing before saving user to database
UserSchema.pre("save", async function (next) {
	const salt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, salt);
	next();
});

const User = mongoose.model("User", UserSchema);

export default User;
