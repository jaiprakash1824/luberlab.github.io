import React, { useState } from 'react';
import JobSidebar from './JobSidebar';
import JobListings from './JobListings';
import './JoinUs.css';

const JoinUs = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="join-us-container">
      <JobSidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <JobListings selectedCategory={selectedCategory} />
    </div>
  );
};

export default JoinUs;