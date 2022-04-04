import express from "express";
const router = express.Router();

import { createJob, getAllJobs } from "../controllers/jobsControllers.js";

router.route("/createJob").post(createJob).get(getAllJobs);
router.route("/getAllJobs").get(getAllJobs);

export default router;
