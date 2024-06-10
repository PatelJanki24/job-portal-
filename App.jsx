// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import JobForm from './JobForm.jsx';
import JobDetails from './JobDetails.jsx';
import './JobForm.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Job Portal</h1>
        <Switch>
          <Route exact path="/">
            <JobForm />
            <Link to="/job-details">View Job Details</Link>
            <br />
            <a href="https://www.naukri.com">View Job Listings</a>
          </Route>
          <Route path="/job-details">
            <JobDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
