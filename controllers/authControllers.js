import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const registerUser = async (req, res, next) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		throw new BadRequestError("Please provide all required fields");
	}

	// email already in use error for error middleware
	const emailAlreadyInUse = await User.findOne({ email });
	if (emailAlreadyInUse) {
		throw new BadRequestError("Sorry, email already in use");
	}
	const user = await User.create({ name, email, password });

	res.status(StatusCodes.CREATED).json({
		user: {
			name: user.name,
			email: user.email,
			location: user.location,
			lastName: user.lastName,
		},
	});
};

const getUsers = async (req, res) => {
	const user = await User.find();

	res.status(StatusCodes.OK).json(user);
};

export { registerUser, getUsers };
