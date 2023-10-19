import React, { useState } from "react";
import './Projects.scss';

import perkk from "./assets/portfolio/perkk.png"
import movies from "./assets/portfolio/movies.png"
import appearHere from "./assets/portfolio/appearHere.png"
import finbourne from "./assets/portfolio/finbourne.png"

const ProjectDetails = [
  {
    id: 0,
    image: appearHere,
    header: 'appear here',
    copy: 'Joining a team of three developers with one lead, I have worked on improvements to the platform, including a complete rebuild of the dashboard, as well as automating payment flows in Stripe. Now, with a team of two and no lead, I share joint responsibilities for the ongoing performance of the site from a code perspective as well as an infrastructure one. This is coupled with driving forward improvements, such as an improved search experience with Algolia and an expanded booking extension flow.',
    link: 'https://www.appearhere.co.uk/',
    linkName: 'website',
  },
  {
    id: 1,
    image: perkk,
    header: 'perkk',
    copy: 'Perkk was a project that I pitched with an aim to give employees greater choice in their workplace perks. After being chosen, it was worked on by a team of four. My role was that of team lead, which required clear management of planning and the GitHub workflow. The project was completed a day early and then presented to the wider boot camp',
    link: 'https://github.com/twperkins/perkk/tree/master',
    linkName: 'github',
    link2: 'https://www.youtube.com/watch?v=PVpF36lRzMs&list=PLkbmdtbypn7QvNokOhyxcuK4A_OSky6D5&index=75',
    linkName2: 'youtube'
  },
  {
    id: 2,
    image: finbourne,
    header: 'finbourne',
    copy: 'Predominantly working on front-end development, I was part of the team building out a comprehensive site called Lusid, integrating financial APIs. In a team of 10 with extensive experience, my responsibilities included building features, expanding the testing suite, and reviewing code from other team members.',
    link: 'https://www.finbourne.com/',
    linkName: 'website',
  },
  {
    id: 3,
    image: movies,
    header: 'movies',
    copy: 'A quick app for creating a movie watchlist. It pulled data from The Movie Database API, allowing users to sort movies into categories and save them for later. This project solidified my understanding of CSS and provided a strong foundation for future development.',
    link: 'https://github.com/twperkins/rails-watch-list/tree/master',
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
      <div className="projects-section">
        {ProjectDetails.map((project) => (
          <div
            className={`project-container ${selectedProject === project ? "selected" : selectedProject ? "hidden" : ""}`}
            key={`container-${project.id}`}
            onClick={() => openProject(project)}
          >
            <img
              className="project-image"
              src={project.image}
              alt={project.alt}
              key={`image-${project.id}`}
            />
            <div className="project-header">{project.header}</div>
          </div>
        ))}
      </div>
      <div className={`selected-project-container ${selectedProject ? "" : "hidden"}`}>
        {selectedProject && (
          <div className="selected-project-top">
            <img
              className="selected-project-image"
              src={selectedProject.image}
              alt={selectedProject.alt}
            />
            <div>
              <div className="selected-project-return" onClick={() => openProject(null)}>&#x2962; return</div>
              <div className="selected-project-copy">{selectedProject.copy}</div>
              <a className="selected-project-link" href={selectedProject.link} target="_blank" rel="noreferrer">{selectedProject.linkName}</a>
              {selectedProject.link2 &&
                <a className="selected-project-link" href={selectedProject.link2} target="_blank" rel="noreferrer">{selectedProject.linkName2}</a>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects;
