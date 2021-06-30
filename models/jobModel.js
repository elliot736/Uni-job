const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, " A job must have a title"],
  },
  company: {
    type: String,
  },
  postDate: {
    type: String,
  },
  summary: {
    type: String,
  },
  location: {
    type: String,
    trim: true,
    required: [true, " A job must have a location"],
  },
  url: {
    type: String,
    required: [true, " A job must have a link"],
  },
});

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;
