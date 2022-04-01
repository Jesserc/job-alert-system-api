import express from "express";
const router = express.Router();

import { createJob, getAllJobs } from "../controllers/jobsControllers.js";

router.route("/").post(createJob).get(getAllJobs);

export default router;
