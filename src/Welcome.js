import React from "react";
import Typewriter from 'typewriter-effect';
import './Welcome.scss';

function Welcome(props) {
  return (
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
        <div className="quote">
          <q>Code is like humor. When you have to explain it, it’s bad.</q>
          <p>- Cory House</p>
        </div>
        <p>Hi, Tom here. After studying history at Oxford and working for 4 years in client facing roles, the next logical step was to learn to code. Currently based in London, I spend my time working on personal projects and diving head first into new challenges.</p>
        <h3>Skills</h3>
        <p>Ruby | Rails | CSS | HTML | JavaScript | SQL | Git | CLI | Figma</p>
        <p>Put CV link here</p>
      </div>
    </div>
  )
}

export default Welcome;
