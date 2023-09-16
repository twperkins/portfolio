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
      </div>
    </div>
  )
}

export default Welcome;
