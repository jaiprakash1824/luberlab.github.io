import { useState, useEffect } from "react";
import JobSidebar from "./JobSidebar";
import JobListings from "./JobListings";
import data from "../../../public/assets/data/jobs2.json"; 
import "./JoinUs.css";

const JoinUs = () => {

  const [selectedJob, setSelectedJob] = useState(data.jobs[0] || null);

  return (
    <div className="join-us-container">
      <JobSidebar setSelectedJob={setSelectedJob} selectedJob={selectedJob} jobs={data.jobs} />
      <JobListings selectedJob={selectedJob} />
    </div>
  );
};

export default JoinUs;