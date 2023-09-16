import React from "react";
import './About.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

const About = ({ displaySection }) => {
  return (
    <div className={displaySection ? 'about-container' : 'about-container hidden'}>
      <div className="skills-section">
        <div className="section-header">skills</div>
        <div className="skills">
          <div>Ruby | JavaScript | Typescript | Python</div>
          <div>Rails | React | Angular</div>
          <div>SQL | Postgres | Graphql</div>
          <div>Git | Kubernetes | Docker | AWS</div>
        </div>
      </div>
      <div className="timeline-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="timeline-current"
            date="2023 - present"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <div className="timeline-title">Full Stack Engineer</div>
            <div className="timeline-subtitle">Appear Here</div>
            <div>
              One of 3 engineers taking ownership of the development journey from idea to deployment.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-work"
            date="2022 - 2023"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <div className="timeline-title">Graduate Engineer</div>
            <div className="timeline-subtitle">Finbourne Technology</div>
            <div>
              Working within the web team, I implemented complex financial data APIs into the core web platform.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-work"
            date="2021 - 2023"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <div className="timeline-title">Teaching Assistant</div>
            <div className="timeline-subtitle">Le Wagon</div>
            <div>
              Following the Le Wagon bootcamp I was chosen as one of 3, out of 30, to help the next batch start their coding journey!
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-study"
            date="2021"
            iconClassName="timeline-icon"
            icon={<SchoolIcon />}
          >
            <div className="timeline-title">Full Stack Developer Student</div>
            <div className="timeline-subtitle">Le Wagon</div>
            <div>
              I undertook a 9 week intensive bootcamp to fulfil a career shift from talking about the future to making the future.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-work"
            date="2018 - 2021"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <div className="timeline-title">Key Account Manager</div>
            <div className="timeline-subtitle">Meltwater</div>
            <div>
              From the analyst position I moved directly into the Key Account Manager role. In this, I managed a portfolio of some of the largest clients in the UK with a focus on the financial and higher education sectors. Finished in the top 3 for both retention and growth in 2019.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-work"
            date="2016 - 2018"
            iconClassName="timeline-icon"
            icon={<WorkIcon />}
          >
            <div className="timeline-title">Analyst</div>
            <div className="timeline-subtitle">Meltwater</div>
            <div>
              Helping to found the UK analyst team in early 2017, I produced reports for a range of clients from World Rugby to Danone tailored to their business needs.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-study"
            date="2012 - 2015"
            iconClassName="timeline-icon"
            icon={<SchoolIcon />}
          >
            <div className="timeline-title">B.A. History (Ancient and Modern)</div>
            <div className="timeline-subtitle">University of Oxford</div>
            <div>
              Spent 3 far too brief years spent delving into history at Oxford. Following my interests, I specialised in the collapse of the Roman Republic for the ancient aspect and the Medieval and late Early Modern periods for the modern parts.
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-study"
            date="2007 - 2012"
            iconClassName="timeline-icon"
            icon={<SchoolIcon />}
          >
            <div className="timeline-title">A Levels (A*AAA)</div>
            <div className="timeline-subtitle">Marlborough College</div>
            <div>
              5 undoubtedly formative years. Whilst history was always my passion, with an eye to the future I ignored those asking "when will we ever use this" in maths. That certainly paid off 10 years later when I explored coding!
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default About;
