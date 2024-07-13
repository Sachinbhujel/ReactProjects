import React, { useState , useRef} from 'react';
import './Contact.css';

function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setStatusMessage('Your message has been sent!');

    
    setTimeout(() => {
      setStatusMessage('');
    }, 2000);

    formRef.current.reset();
  };

  return (
    <>
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
        <p id="status-message">{statusMessage}</p>
      </div>
    </>
  );
}

export default Contact;