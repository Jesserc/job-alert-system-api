const createJob = async (req, res) => {
	await res.send("createJob");
};

const getAllJobs = async (req, res) => {
	await res.send("getAllJobs");
};

export { createJob, getAllJobs };
