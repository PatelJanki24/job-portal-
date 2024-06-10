import React, { useState } from 'react';

function ContactForm() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleResize = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number:</label>
          <input type="tel" id="phonenumber" name="phonenumber" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="1" // Set initial rows to 1
            value={message}
            onChange={handleChange}
            onInput={handleResize} // Resize textarea as user types
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
