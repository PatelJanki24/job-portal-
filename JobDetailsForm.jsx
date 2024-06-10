// JobDetailsForm.jsx
import React from 'react';
import JobData from './JobData'; // Import the job data

function JobDetailsForm({ category }) {
  // Get the job details based on the selected category
  const jobs = JobData[category];

  return (
    <div>
      <h2>Job Details for {category}</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h3>{job.title}</h3>S
          <p>{job.description}</p>
          <p>Location: {job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default JobDetailsForm;
