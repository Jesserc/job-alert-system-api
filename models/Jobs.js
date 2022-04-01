import mongoose from "mongoose";

const JobsSchema = new mongoose.Schema({
	companyName: {
		type: String,
		required: [true, "Name of Company is required"],
	},
	jobTitle: {
		type: String,
		required: [true, "Job title is required"],
	},
	companyLocation: {
		type: String,
		required: [true, "Company Location is required"],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Jobs = mongoose.model("Jobs", JobsSchema);

export default Jobs;
