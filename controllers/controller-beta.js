// const Jobs = require("../models/jobModel");
// const data = require("../api");
let service = require("indeed-job-scraper");

// const indeed = require("indeed-scraper");

exports.getJobs = async (req, res) => {
  try {
    let query = req.query.sub;
    let city = req.query.city;
    service.PARAMS.queryAny = query;
    service.PARAMS.location = city;
    service.PARAMS.maxPerPage = 10;
    service.PARAMS.pageLimit = 1;

    //first : to get the fetched jobs as an array of objects

    const data = await service
      .getJobs()
      .then((jobs) => {
        return jobs;
      })
      .catch((error) => {
        console.log(error);
      });

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
