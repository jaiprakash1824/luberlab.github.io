import React from 'react';
import './JobListings.css';
import MyComp from './Mycomp';  

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
          {Array.isArray(selectedJob.description) ? (
            <div className="description">
              {selectedJob.description.map((desc, index) => (
                <MyComp key={index} description={desc} />
              ))}
            </div>
          ) : (
            <MyComp description={selectedJob.description} />
          )}
          {selectedJob.additionalinformation && selectedJob.additionalinformation.length > 0 && (
            <div className="minimum-qualification">
              <h5>Additional Information</h5>
              <ul>
                {selectedJob.additionalinformation.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Select a job to see more details.</p>
      )}
    </div>
  );
};

export default JobListings;


