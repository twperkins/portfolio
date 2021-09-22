import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About(props) {
  return (
    <div className="About">
      <h2>About</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="timeline-work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Oct 2021 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="timeline-title">Teaching Assistant</h3>
          <h4 className="timeline-subtitle">Le Wagon</h4>
          <p>
            Following the Le Wagon bootcamp I was chosen as one of 3, out of 30, to help the next batch start their coding journey!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-study"
          date="Jul 2021 - Sep 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
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
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
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
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="timeline-title">B.A. History(Ancient and Modern)</h3>
          <h4 className="timeline-subtitle">University of Oxford</h4>
          <p>
            Spent 3 far too brief years spent delving into history at Oxford. Following my interests, I specialised in the collapse of the Roman Republic for the ancient aspect and the Medieval and late Early Modern periods for the modern parts.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default About;
