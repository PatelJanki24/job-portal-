import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JobForm from './JobForm.jsx';
import JobDetails from './JobDetails.jsx';
import ContactUs from './ContactUs.jsx';
import './App.css'; // Assuming this file contains your CSS, including the .navbar styles

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Job Portal</h1>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/job-search">Job Search</Link></li>
            <li><Link to="/job-details">Job Details</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
          <form className="search-form">
            <input type="text" placeholder="Search jobs..." />
            <button type="submit">Search</button>
          </form>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="job-portal-info">
                  <p>Welcome to the Job Portal! Here you can find the latest job listings, submit your applications, and view job details. We are dedicated to helping you find the right job opportunities that match your skills and career goals.</p>
                  <ul>
                    <li>Submit your job application using the form below.</li>
                    <li>View detailed information about the available job positions.</li>
                    <li>Contact us for any inquiries or support.</li>
                  </ul>
                </div>
              </>
            }
          />
          <Route
            path="/job-search"
            element={
              <>
                <JobForm />
              </>
            }
          />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/contact-us/*" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
