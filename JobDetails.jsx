// JobDetails.jsx
import React from 'react';
import jobData from './JobData'; // Import job data

function JobDetails() {
  return (
    <div>
      <h2>Job Details</h2>
      {Object.keys(jobData).map((category) => (
        <div key={category} className="job-category">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          {jobData[category].length > 0 ? (
            <ul>
              {jobData[category].map((job, index) => (
                <li key={index}>
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs available in this category.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobDetails;
