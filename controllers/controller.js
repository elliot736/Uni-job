// const Jobs = require("../models/jobModel");
// const data = require("../api");

const indeed = require("indeed-scraper");

exports.getJobs = async (req, res) => {
  //
  // console.log(req.body.name);

  try {
    let query = req.query.q;
    let city = req.query.loc;

    const queryOptions = {
      host: "www.indeed.de",
      query: query,
      city: city,
      radius: "25",
      sort: "relevance",
      limit: 10,
      jobType: ["werkstudent", "studentenjob", "teilzeit"],
      maxAge: "10",
    };

    const data = await indeed.query(queryOptions).then((res) => {
      return res;
    });

    res.status(200).json({
      status: "success",
      body: data,
    });
    // console.log(JSON.stringify(data[0]["Id"]));
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
