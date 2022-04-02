import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleWare = (error, req, res, next) => {
	console.log(error);

	const defaultError = {
		status: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: error.message || "Something went wrong, please try again later",
	};

	res.status(defaultError.status).json({ msg: defaultError.msg });
};

export default ErrorHandlerMiddleWare;
