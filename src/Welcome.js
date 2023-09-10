import React from "react";
import Typewriter from 'typewriter-effect';
import './Welcome.scss';
import WordGame from "./WordGame.js";

const Welcome = () => {
  return (
    <div>
      <div className="welcome-container">
        <div className="personal-info">
          <h1>tom perkins</h1>
          <Typewriter
            options={{
              wrapperClassName: "typewriter",
              cursorClassName: "typewriter-cursor",
              strings: ['full stack developer', 'history enthusiast', 'mountain addict'],
              autoStart: true,
              loop: true,
              pauseFor: 2500,
            }}
          />
        </div>
        <WordGame />
        {/* <div className="personal-description">
          <h3>Welcome</h3>
          <p>Hi, Tom here. After studying history at Oxford and working for 4 years in client facing roles, obviously the next logical step was to learn to code...</p>
          <p>Curently working in a small team of engineers building the future of retail</p>
          <h3>Skills</h3>
          <div className="skills">
            <p>Ruby | JavaScript | Typescript | Python</p>
            <p>Rails | React | Angular</p>
            <p>SQL | Postgres | Graphql</p>
            <p>Git | Kubernetes | Docker | AWS</p>
          </div> */}
        {/* <p>Put CV link here</p>
          <p>Add social links here</p> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Welcome;
