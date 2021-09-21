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
          description="Perkk was a project that I pitched with an aim to give employees greater choice in their workplace perks. After being chosen it was worked on by a team of four. My role was that of team lead which required clear management of planning and the github workflow. The project was compelted a day early with the major challenges being the integration of a range of JS functionality to bring the project to life."
        />
        <Thumbnail
          link="movies"
          image={movies1}
          title="Movies"
          description="A quick personal app to make a movie watch list. Pulling data from The Movie Database API it allowed for movies to be sorted into categories and saved for later. An early project that I undertook it cemented a lot of knowledge about CSS and gave a good bedrock for further development."
        />
      </div>
    </div>
  )
}

export default Projects;
