import React from "react";
import Thumbnail from "./Thumbnail";
import './Projects.scss';
import perkk1 from "./assets/perkk1.png"
import movies1 from "./assets/movies1.png"

function Projects(props) {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      <div className="project-flex">
        <Thumbnail
          link="perkk"
          image={perkk1}
          title="Perkk"
          description="An app giving greater choice of workplace perks to employees"
        />
        <Thumbnail
          link="movies"
          image={movies1}
          title="Movies"
          description="A quick personal project to make a movie watch list"
        />
      </div>
    </div>
  )
}

export default Projects;
