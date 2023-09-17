import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Contact.scss';

const Contact = ({ displaySection }) => {
  return (
    <div className={displaySection ? 'contact-container' : 'contact-container hidden'}>
      <div className='contact-section'>
        <div className='contact-content'>contact me by email at <a href="mailto:twperkins.work@gmail.com">twperkins.work@gmail.com</a></div>
        <div className='contact-content'>or find me on social media:</div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/tom-perkins1/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
          <a href="https://github.com/twperkins" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
