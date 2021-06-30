const Job = require("./models/jobModel");
const indeed = require("indeed-scraper");

const mongoose = require("mongoose");

const dotenv = require("dotenv");
const { insertMany } = require("./models/jobModel");

// require("dotenv").config({ path: "config.env" });

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB is connected succssfully ");
  });

const queryOptions = {
  host: "www.indeed.de",
  query: "php",
  city: "bielefeld",
  radius: "25",
  sort: "relevance",
  limit: 3,
  jobType: ["werkstudent", "studentenjob", "teilzeit"],
  maxAge: "10",
};
indeed.query(queryOptions).then((jobs) => {
  console.log(jobs);
  jobs.map((job) => {
    Job.insertMany(job, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  });
});

// Job.insertMany(
//   indeed.query(queryOptions).then((jobs) => {
//     console.log(jobs);

//     return jobs;
//   }),
//   function (err, result) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   }
// );
