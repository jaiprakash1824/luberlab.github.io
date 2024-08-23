import React from 'react';
import './JobListings.css';
// import MyComponent from './MyComponent';

const JobListings = ({ selectedJob }) => {
  return (
    <div className="job-listings">
      {selectedJob ? (
        <div key={selectedJob.id} className="job-card">
          <div className="job-header">
            <h2>{selectedJob.title}</h2>
            <button style={{ fontWeight: 'bold' }} className="apply-button">APPLY</button>
          </div>
          <hr />
          <p className="description">
            {Array.isArray(selectedJob.description) 
              ? selectedJob.description.map((desc, index) => (
                  <React.Fragment key={index}>
                    {desc}
                    <br />
                  </React.Fragment>
                ))
              : selectedJob.description
            }
          </p>
          <div className="minimum-qualification">
            <h5>Additional Information</h5>
            <ul>
              {selectedJob.additionalinformation.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Select a job to see more details.</p>
      )}
    </div>
  );
};

export default JobListings;


