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
    header: 'perkk',
    copy: 'blah blah blah blah blah blah blah',
    link: '',
    linkName: 'github',
  },
  {
    id: 1,
    image: movies1,
    header: 'movies',
    copy: 'blah blah blah blah blah blah blah',
    link: '',
    linkName: 'github',
  },
  {
    id: 2,
    image: perkk2,
    header: 'finbourne',
    copy: 'blah blah blah blah blah blah blah',
    link: '',
    linkName: 'website',
  },
  {
    id: 3,
    image: movies2,
    header: 'appear here',
    copy: 'blah blah blah blah blah blah blah',
    link: '',
    linkName: 'website',
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProject = (project) => project === selectedProject ? setSelectedProject(null) : setSelectedProject(project);


  return (
    <div className="projects-container">
      <div className="projects-header">projects</div>
      <div className="projects-section" >
        {
          ProjectDetails.map((project) => (
            <div className="project-container" key={`container-${project.id}`}>
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
    </div>
  )
}

export default Projects;
