import React, { useState } from "react";
import './Projects.scss';
import perkk1 from "./assets/portfolio/perkk1.png"
import movies1 from "./assets/portfolio/movies1.png"
import perkk2 from "./assets/portfolio/perkk2.png"
import movies2 from "./assets/portfolio/movies2.png"

const ProjectDetails = [
  {
    id: 0,
    image: perkk1,
    alt: 'perkk'
  },
  {
    id: 1,
    image: movies1,
    alt: 'movies'
  },
  {
    id: 2,
    image: perkk2,
    alt: 'finbourne'
  },
  {
    id: 3,
    image: movies2,
    alt: 'appear here'
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (project) => project === selectedProject ? setSelectedProject(null) : setSelectedProject(project);

  const projectClass = (project) => {
    if (selectedProject) {
      if (selectedProject === project) {
        return 'selected-project-container';
      } else {
        return 'unselected-project-container';
      }
    } else {
      return 'project-container';
    }
  };


  return (
    <div className="projects-container">
      <div className="projects-section" >
        {
          ProjectDetails.map((project) => (
            <div className={projectClass(project)} key={`container-${project.id}`}>
              <img
                className="project-image"
                src={project.image} alt={project.alt}
                onClick={() => openProject(project)}
                key={`image-${project.id}`}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;
