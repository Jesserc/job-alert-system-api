import Jobs from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";

const createJob = async (req, res) => {
	const {
		companyName,
		jobTitle,
		companyLocation,
		salaryRange,
		jobType,
		jobDescription,
		applicationDeadline,
	} = req.body;

	const jobs = await Jobs.create({
		companyName,
		jobTitle,
		companyLocation,
		salaryRange,
		jobType,
		jobDescription,
		applicationDeadline,
	});

	res.status(StatusCodes.CREATED).json({
		jobs: {
			companyName: jobs.companyName,
			jobTitle: jobs.jobTitle,
			companyLocation: jobs.companyLocation,
			salaryRange: jobs.salaryRange,
			jobType: jobs.jobType,
			jobDescription: jobs.jobDescription,
			applicationDeadline: jobs.applicationDeadline,
		},
	});
};

const getAllJobs = async (req, res) => {
	const jobs = await Jobs.find();

	res.status(StatusCodes.OK).json(jobs);
};

export { createJob, getAllJobs };
