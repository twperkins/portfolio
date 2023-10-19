import React, { useRef, useState, useEffect } from 'react';
import Loading from './Loading';
import Welcome from "./Welcome.js";
import Projects from './Projects.js';
import Contact from "./Contact.js";
import About from "./About.js";
import PageDivider from './PageDivider';
import './App.scss';

const App = () => {
  const [homeLinkVisible, setHomeLinkVisible] = useState(false);
  const [downLinkVisible, setDownLinkVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [aboutSectionVisible, setAboutSectionVisible] = useState(false);
  const [contactSectionVisible, setContactSectionVisible] = useState(false);

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

  const showAbout = () => setAboutSectionVisible(!aboutSectionVisible);
  const showContact = () => setContactSectionVisible(!contactSectionVisible);;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5300);
  }, []);

  return (
    <div className="app" onScroll={handleScroll} ref={app}>
      {isLoading && <Loading />}

      <div onClick={scrollToTop} className={homeLinkVisible ? 'link home-link' : 'link home-link hidden-link'}>&#x2963;</div>
      <div onClick={scrollToProjects} className={downLinkVisible ? 'link projects-link' : 'link projects-link hidden-link'}>&#x2965;</div>

      <div className={aboutSectionVisible ? 'link-container left expanded' : 'link-container left'}>
        <div className={aboutSectionVisible ? 'side-link-container expanded' : 'side-link-container'}>
          <div onClick={showAbout} className={downLinkVisible ? 'link about-link' : 'link about-link hidden-link'}>about</div>
        </div>
      </div>
      <div className={contactSectionVisible ? 'link-container right expanded' : 'link-container right'}>
        <div className={contactSectionVisible ? 'side-link-container expanded' : 'side-link-container'}>
          <div onClick={showContact} className={downLinkVisible ? 'link contact-link' : 'link contact-link hidden-link'}>contact</div>
        </div>
      </div>

      <Welcome />
      <About displaySection={aboutSectionVisible} />
      <Contact displaySection={contactSectionVisible} />


      {!isLoading &&
        <>
          <PageDivider />
          <div ref={projectsCard}>
            <Projects />
          </div>
        </>
      }
    </div>
  );
}

export default App;
