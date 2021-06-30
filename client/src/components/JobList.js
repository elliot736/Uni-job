import React from "react";
import JobItem from "./JobItem";
import "../static/css/item.css";

const JobList = ({ jobs }) => {
  if (!jobs) {
    return <div>loading..</div>;
  }
  const renderedList = jobs.map((job) => {
    return <JobItem key={job.Id} job={job} />;
  });
  return <div className="cards">{renderedList}</div>;
};

export default JobList;
