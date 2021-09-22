import React from "react";
import './About.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

function About(props) {
  return (
    <div className="About">
      <h2>About</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="timeline-current"
          contentStyle={{ background: 'rgba(0, 0, 0, 0)', color: '#fff' }}
          date="2021 - present"
          iconClassName="timeline-current-icon"
          icon={<WorkIcon />}
        >
          <h3 className="timeline-title">Teaching Assistant</h3>
          <h4 className="timeline-subtitle">Le Wagon</h4>
          <p>
            Following the Le Wagon bootcamp I was chosen as one of 3, out of 30, to help the next batch start their coding journey!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-study"
          date="2021"
          iconClassName="timeline-study-icon"
          icon={<SchoolIcon />}
        >
          <h3 className="timeline-title">Full Stack Developer Student</h3>
          <h4 className="timeline-subtitle">Le Wagon</h4>
          <p>
            I undertook a 9 week intensive bootcamp to fulfil a career shift from talking about the future to making the future.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-work"
          date="2018 - 2021"
          iconClassName="timeline-work-icon"
          icon={<WorkIcon />}
        >
          <h3 className="timeline-title">Key Account Manager</h3>
          <h4 className="timeline-subtitle">Meltwater</h4>
          <p>
            From the analyst position I moved directly into the Key Account Manager role. In this, I managed a portfolio of some of the largest clients in the UK with a focus on the financial and higher education sectors. Finished in the top 3 for both retention and growth in 2019.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-work"
          date="2016 - 2018"
          iconClassName="timeline-work-icon"
          icon={<WorkIcon />}
        >
          <h3 className="timeline-title">Analyst</h3>
          <h4 className="timeline-subtitle">Meltwater</h4>
          <p>
            Helping to found the UK analyst team in early 2017, I produced reports for a range of clients from World Rugby to Danone tailored to their business needs.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-study"
          date="2012 - 2015"
          iconClassName="timeline-study-icon"
          icon={<SchoolIcon />}
        >
          <h3 className="timeline-title">B.A. History (Ancient and Modern)</h3>
          <h4 className="timeline-subtitle">University of Oxford</h4>
          <p>
            Spent 3 far too brief years spent delving into history at Oxford. Following my interests, I specialised in the collapse of the Roman Republic for the ancient aspect and the Medieval and late Early Modern periods for the modern parts.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-study"
          date="2007 - 2012"
          iconClassName="timeline-study-icon"
          icon={<SchoolIcon />}
        >
          <h3 className="timeline-title">A Levels (A*AAA)</h3>
          <h4 className="timeline-subtitle">Marlborough College</h4>
          <p>
            5 undoubtedly formative years. Whilst history was always my passion, with an eye to the future I ignored those asking "when will we ever use this" in maths. That certainly paid off 10 years later when I explored coding!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default About;
