import React from "react";
import './About.scss';

const About = ({ displaySection }) => {
  return (
    <div className={displaySection ? 'about-container' : 'about-container hidden'}>
      <div className="first-section">
        <div className="section-header">Welcome</div>
        <div>Hi, Tom here. After studying history at Oxford and working for 4 years in client facing roles, obviously the next logical step was to learn to code...</div>
        <div>Curently working in a small team of engineers building the future of retail</div>
      </div>
      <div className="second-section">
        <div className="section-header">Skills</div>
        <div className="skills">
          <div>Ruby | JavaScript | Typescript | Python</div>
          <div>Rails | React | Angular</div>
          <div>SQL | Postgres | Graphql</div>
          <div>Git | Kubernetes | Docker | AWS</div>
        </div>
      </div>
    </div>
  )
}

export default About;
