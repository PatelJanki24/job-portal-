import React, { useState } from 'react';
import './JobForm.css'; // Import CSS file for styling

const JobForm = () => {
  const [location, setLocation] = useState('');
  const [workType, setWorkType] = useState('');
  const [jobType, setJobType] = useState('');
  const [category, setCategory] = useState('');
  const [skills, setSkills] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleWorkTypeChange = (event) => {
    setWorkType(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setJobType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSkillsChange = (event) => {
    const selectedSkills = Array.from(event.target.selectedOptions, option => option.value);
    setSkills(selectedSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Location:', location);
    console.log('Work Type:', workType);
    console.log('Job Type:', jobType);
    console.log('Category:', category);
    console.log('Skills:', skills);
    // You can perform further actions here, like sending data to a backend server
  };

  // Define skills options based on category with sub-categories
  const skillsOptions = {
    Designing: {
      'Graphic Design': ['Adobe Photoshop', 'Illustrator', 'Sketch'],
    
    },
    Management: {
      'Leadership Skills': ['Leadership', 'Strategic Planning', 'Team Management', 'Project Management'],
    },
    Medical: {
      'Medical Terminology': ['Anatomy', 'Physiology', 'Pathology','Pharmaceutical Knowledge'],
      'Patient Care': ['First Aid', 'Patient Communication', 'Medical Ethics'],
    },
    Engineering: {
      'Mechanical Engineering': ['Statics', 'Dynamics', 'Thermodynamics'],
      'Electrical Engineering': ['Circuit Analysis', 'Electronics', 'Power Systems'],
      'IT Sector': ['Software Engineering', 'UI/UX Designer', 'Data Analytics'],
    },
    Marketing: {
      'Digital Marketing': ['SEO', 'SEM', 'Social Media Marketing','Market Resarch'],
      'Content Marketing': ['Content Creation', 'Copywriting', 'Blogging'],
    },
    // Additional categories with sub-categories
    OtherCategory: {
      'Skill 1': ['Sub-skill 1', 'Sub-skill 2'],
      'Skill 2': ['Sub-skill 3', 'Sub-skill 4'],
    },
    CustomCategory: {
      'Custom Skill 1': ['Custom Sub-skill 1', 'Custom Sub-skill 2'],
      'Custom Skill 2': ['Custom Sub-skill 3', 'Custom Sub-skill 4'],
    },
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />
      </div>
      <div className="form-group">
        <label htmlFor="workType">Work Type:</label>
        <select id="workType" value={workType} onChange={handleWorkTypeChange}>
          <option value="">Select Work Type</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="jobType">Job Type:</label>
        <select id="jobType" value={jobType} onChange={handleJobTypeChange}>
          <option value="">Select Job Type</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
          <option value="Contract-based">Contract-based</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="Designing">Designing</option>
          <option value="Management">Management</option>
          <option value="Medical">Medical</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          {/* Additional categories */}
          <option value="OtherCategory">Other Category</option>
          <option value="CustomCategory">Custom Category</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="skills">Skills Required:</label>
        <select id="skills" multiple value={skills} onChange={handleSkillsChange}>
          {category && Object.keys(skillsOptions[category]).map(subCategory => (
            <>
              <optgroup label={subCategory}>
                {skillsOptions[category][subCategory].map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </optgroup>
            </>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobForm;
