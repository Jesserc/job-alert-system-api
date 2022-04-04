import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const registerUser = async (req, res, next) => {
	const { name, email, password } = req.body;
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
