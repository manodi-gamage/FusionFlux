import React from 'react';
import './contactinfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <p><strong>Address:</strong> 123 Tourism Street, Colombo, Sri Lanka</p>
        <p><strong>Phone:</strong> +94 11 234 5678</p>
        <p><strong>Email:</strong> info@srilankatourism.com</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
