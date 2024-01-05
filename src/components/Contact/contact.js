import React from 'react';
import './contact.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {
  return (
    <div id="contact" className="links">
      <a href="https://github.com/shriya-2003" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Github" className="link" />
      </a>
      <a href="https://www.linkedin.com/in/shriya-sanjay-70550a246/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="Linkedin" className="link" />
      </a>
    </div>
  );
}

export default Contact;
