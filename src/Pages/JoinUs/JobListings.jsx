import React from 'react';
import data from '../../../public/assets/data/jobs.json';
import './JobListings.css';

const JobListings = ({ selectedCategory }) => {
  const jobs = selectedCategory
    ? data.categories.find(category => category.name === selectedCategory).jobs
    : data.categories.flatMap(category => category.jobs);

  return (
    <div className="job-listings">
      {jobs.map(job => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <h2>{job.title}</h2>
            <button style={{ fontWeight: 'bold' }} className="apply-button">APPLY</button>
          </div>
          <hr />
          <p className="description">{job.description}</p>
          {job.minimumQualification && (
            <div className="minimum-qualification">
              <h5>Minimum Qualification</h5>
              <ul>
                {job.minimumQualification.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobListings;
