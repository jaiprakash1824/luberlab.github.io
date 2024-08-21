import React, { useState } from 'react';
import JobSidebar from './JobSidebar';
import JobListings from './JobListings';
import './JoinUs.css';

const JoinUs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="join-us-container">
      <JobSidebar setSelectedJob={setSelectedJob} selectedJob={selectedJob} />
      <JobListings selectedJob={selectedJob} />
    </div>
  );
};

export default JoinUs;
