import React, { useState } from "react";
import './Projects.scss';
import perkk1 from "./assets/portfolio/perkk1.png"
import movies1 from "./assets/portfolio/movies1.png"
import perkk2 from "./assets/portfolio/perkk2.png"
import movies2 from "./assets/portfolio/movies2.png"

const ProjectDetails = [
  {
    id: 0,
    image: perkk2,
    header: 'appear here',
    copy: 'blah blah blah blah blah blah blah',
    link: '',
    linkName: 'website',
  },
  {
    id: 1,
    image: perkk1,
    header: 'perkk',
    copy: 'Perkk was a project that I pitched with an aim to give employees greater choice in their workplace perks. After being chosen it was worked on by a team of four. My role was that of team lead which required clear management of planning and the github workflow. The project was compelted a day early with the major challenges being the integration of a range of JS functionality to bring the project to life.',
    link: '',
    linkName: 'github',
  },
  {
    id: 2,
    image: movies2,
    header: 'finbourne',
    copy: 'blah blah blah',
    link: '',
    linkName: 'website',
  },
  {
    id: 3,
    image: movies1,
    header: 'movies',
    copy: 'A quick personal app to make a movie watch list. Pulling data from The Movie Database API it allowed for movies to be sorted into categories and saved for later. An early project that I undertook it cemented a lot of knowledge about CSS and gave a good bedrock for further development.',
    link: '',
    linkName: 'github',
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (project) => setSelectedProject(project);


  return (
    <div className="projects-container">
      <div className="projects-header">
        <div>{selectedProject?.header || 'projects'}</div>
      </div>
      <div className="projects-section" >
        {
          ProjectDetails.map((project) => (
            <div className={selectedProject === project ? "project-container selected" : selectedProject ? "project-container hidden" : "project-container"} key={`container-${project.id}`}>
              <img
                className="project-image"
                src={project.image} alt={project.alt}
                onClick={() => openProject(project)}
                key={`image-${project.id}`}
              />
              <div className="project-header">{project.header}</div>
            </div>
          ))
        }
      </div>
      <div className={selectedProject ? "selected-project-container" : "selected-project-container hidden"}>
        {selectedProject &&
          <div className="selected-project-top">
            <img
              className="selected-project-image"
              src={selectedProject.image} alt={selectedProject.alt}
            />
            <div>
              <div className="selected-project-return" onClick={() => openProject(null)}>&#x2962; return</div>
              <div className="selected-project-copy">{selectedProject.copy}</div>
              <a className="selected-project-link" href={selectedProject.link}>{selectedProject.linkName}</a>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Projects;
