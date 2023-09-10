import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact</h2>
      <p>Contact me by email at <a href="mailto:twperkins.work@gmail.com">twperkins.work@gmail.com</a></p>
      <p>Or find me on social media:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/tom-perkins1/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
        <a href="https://github.com/twperkins" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
      </div>
    </div>
  )
}

export default Contact;
