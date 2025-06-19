const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
};

exports.createJob = async (req, res) => {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
};

exports.updateJob = async (req, res) => {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
};

exports.deleteJob = async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
};
