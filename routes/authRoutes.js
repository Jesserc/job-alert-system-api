import express from "express";
const router = express.Router();

import { registerUser, getUsers } from "../controllers/authControllers.js";

router.route("/registerUser").post(registerUser) /* .get(getUsers) */;
router.route("/getUsers").get(getUsers);

export default router;
