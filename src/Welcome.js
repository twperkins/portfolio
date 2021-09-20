import React from "react";
import Typewriter from 'typewriter-effect';
import './Welcome.scss';

function Welcome(props) {
  return (
    <div className="Welcome">
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
  )
}

export default Welcome;
