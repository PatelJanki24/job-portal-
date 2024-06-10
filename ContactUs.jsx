// ContactUs.jsx
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ContactForm from './ContactForm.jsx';

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>You can reach us at jobportal@example.com</p>
      <Link to="form">Fill Contact Form</Link> {/* Link to nested route */}
      
      <Routes>
        <Route path="form" element={<ContactForm />} /> {/* Nested Route */}
      </Routes>
    </div>
  );
}

export default ContactUs;
