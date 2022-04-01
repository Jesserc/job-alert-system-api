import express from "express";
const router = express.Router();

import { registerUser, getUsers } from "../controllers/authControllers.js";

router.route("/registerUser").post(registerUser);
router.route("/getUsers").get(getUsers);

export default router;
