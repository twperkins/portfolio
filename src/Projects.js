import React from "react";
import './Projects.scss';
import perkk1 from "./assets/portfolio/perkk1.png"
import movies1 from "./assets/portfolio/movies1.png"
import perkk2 from "./assets/portfolio/perkk2.png"
import movies2 from "./assets/portfolio/movies2.png"

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-section" >
        <img className="projects-image first" src={perkk1} alt='perkk' />
        <img className="projects-image" src={perkk2} alt='perkk' />
        <img className="projects-image" src={movies1} alt='movies' />
        <img className="projects-image" src={movies2} alt='movies' />
      </div>
    </div>
  )
}

export default Projects;
