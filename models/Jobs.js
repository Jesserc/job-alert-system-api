import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({
	companyName: {
		type: String,
	},
	jobTitle: {
		type: String,
	},
	companyLocation: {
		type: String,
	},
	salaryRange: {
		type: String,
	},
	jobType: {
		type: String,
	},
	jobDescription: {
		type: String,
	},
	applicationDeadline: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Jobs = mongoose.model("Jobs", JobsSchema);

export default Jobs;
