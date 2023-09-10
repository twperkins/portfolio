import React, { useRef, useState, useEffect } from 'react';
import Loading from './Loading';
import Welcome from "./Welcome.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import About from "./About.js";
import './App.scss';
import perkk1 from "./assets/portfolio/perkk1.png"
import movies1 from "./assets/portfolio/movies1.png"
import perkk2 from "./assets/portfolio/perkk2.png"
import movies2 from "./assets/portfolio/movies2.png"

const App = () => {
  const [homeLinkVisible, setHomeLinkVisible] = useState(false);
  const [downLinkVisible, setDownLinkVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = (event) => {
    const heightToHideFrom = window.screen.height * 0.5;
    const winScroll = event.target.scrollTop;

    if (winScroll > heightToHideFrom) {
      setHomeLinkVisible(true);
      setDownLinkVisible(false);
    } else {
      setHomeLinkVisible(false);
      setDownLinkVisible(true);
    }
  }

  const app = useRef(null)
  const scrollToTop = () => app.current.scrollTo({ top: 0, behavior: "smooth", block: "end", inline: "nearest" })

  const projectsCard = useRef(null)
  const scrollToProjects = () => projectsCard.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })

  const showAbout = () => null;
  const showContact = () => null;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);


  return (
    <div className="app" onScroll={handleScroll} ref={app}>
      {isLoading && <Loading />}

      <div onClick={scrollToTop} className={homeLinkVisible ? 'link home-link' : 'link home-link hidden-link'}>&#x2963;</div>
      <div onClick={scrollToProjects} className={downLinkVisible ? 'link projects-link' : 'link projects-link hidden-link'}>&#x2965;</div>
      <div onClick={showAbout} className={downLinkVisible ? 'link about-link' : 'link about-link hidden-link'}>about</div>
      <div onClick={showContact} className={downLinkVisible ? 'link contact-link' : 'link contact-link hidden-link'}>twperkins.work@gmail.com</div>

      <Welcome />

      {!isLoading &&
        <>
          <div className="projects-container" ref={projectsCard}>
            <div className="projects-divider first-image" >
              <div className="projects-title">perkk</div>
              <img className="projects-image" src={perkk1} alt='perkk' />
            </div>
            {/* <div className="projects-divider" /> */}
            <div className="projects-divider second-image" >
              <div className="projects-title">perkk</div>
              <img className="projects-image" src={perkk2} alt='perkk' />
            </div>
            {/* <div className="projects-divider" /> */}
            <div className="projects-divider third-image" >
              <div className="projects-title">perkk</div>
              <img className="projects-image" src={movies1} alt='movies' />
            </div>
            {/* <div className="projects-divider" /> */}
            <div className="projects-divider fourth-image" >
              <div className="projects-title">perkk</div>
              <img className="projects-image" src={movies2} alt='movies' />
            </div>
          </div>

          {/* <div ref={firstProject} >
            <Project
              images={[perkk1, perkk2]}
              title="perkk"
              description="Perkk was a project that I pitched with an aim to give employees greater choice in their workplace perks. After being chosen it was worked on by a team of four. My role was that of team lead which required clear management of planning and the github workflow. The project was compelted a day early with the major challenges being the integration of a range of JS functionality to bring the project to life." />
            </div>
            <Project
              image={[movies1, movies2]}
              title="movies"
              description="A quick personal app to make a movie watch list. Pulling data from The Movie Database API it allowed for movies to be sorted into categories and saved for later. An early project that I undertook it cemented a lot of knowledge about CSS and gave a good bedrock for further development."
            /> */}

          {/* <Welcome />
            <About />
            <Contact /> */}
        </>
      }
    </div>
  );
}

export default App;
