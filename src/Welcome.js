import React from "react";
import Typewriter from 'typewriter-effect';
import './Welcome.scss';

function Welcome(props) {
  return (
    <div>
      <div className="Welcome">
        <div className="personal-info">
          <h1>TOM PERKINS</h1>
          <Typewriter
            options={{
              wrapperClassName: "typewriter",
              cursorClassName: "typewriter-cursor",
              strings: ['Full Stack Developer', 'History Enthusiast', 'Mountain Addict'],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
        </div>
        <div className="personal-description">
          <h3>Welcome</h3>
          <p>Hi, Tom here. After studying history at Oxford and working for 4 years in client facing roles, obviously the next logical step was to learn to code...</p>
          <p>Curently working in a small team of engineers building the future of retail</p>
          <h3>Skills</h3>
          {/* <p>Ruby | Rails | CSS | HTML | JavaScript | SQL | Git | CLI | Figma</p> */}
          <div className="skills">
            <p>Ruby | JavaScript | Typescript | Python</p>
            <p>Rails | React | Angular</p>
            <p>SQL | Postgres | Graphql</p>
            <p>Git | Kubernetes | Docker | AWS</p>
          </div>
          {/* <p>Put CV link here</p>
          <p>Add social links here</p> */}
        </div>
      </div>
      <div className="Welcome-lower">
        <div className="quote-section">
          <h2>Quote of the Day</h2>
          <div className="quote">
            <q>Code is like humor. When you have to explain it, it’s bad.</q>
            <p>- Cory House</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
