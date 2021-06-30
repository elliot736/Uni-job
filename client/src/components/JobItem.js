import React from "react";
import "../static/css/item.css";

const JobItem = ({ job }) => {
  const { title, url, summary, postDate, location, company } = job;
  return (
    <div>
      <div className="grid">
        <div className="card">
          <div className="icon-briefcase">
            <svg className="icon-briefcase">
              <use xlinkHref="#icon-briefcase"></use>
            </svg>
          </div>
          <div className="content-card">
            <div className="header-card">
              <h2 className="title-card">{title}</h2>
              <div className="chips">
                <span className="date">{postDate}</span>
                <span className="loc">{location}</span>
              </div>
            </div>
            <div className="company">
              <h2>{company}</h2>
            </div>
            <div className="details-card">
              <div className="summary">
                <p>{summary}</p>
              </div>
            </div>
          </div>
          <div className="button-card">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div className="btn-card">Weiter zur Bewerbung</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
