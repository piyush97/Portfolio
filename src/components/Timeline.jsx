import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './verticalTimeline.css';
import './verticalTimelineElement.css';

class Timeline extends Component
{
  render(){
    return(
      <VerticalTimeline animate={true}>
        <VerticalTimelineElement className="vertical-timeline-element--work" date = "June 2018 - August 2018" iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} >
          <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Meaww, Blr, India</h4>
          <div>
            <p>Meaww(Media, Entertainment, Arts, WorldWide) is one of the Top 500 Websites in the world.</p>
            <p>Made a full - fledged Dashboard with amazing GUI on ReactJs using charting libraries like D3JS and Chartist.Saved states using Redux. Worked on XHR, RESTful APIs and Javascript Data structures.</p>
            <p>Technologies used: NodeJS, React.Js, Redux, PostgreSQL, MySQL, AWS, RabbitMQ, Hadoop, Spark.</p>
            <p><a href='http://dev.inf.meaww.com'>See Project</a> </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date = "March 2018 - May 2018" iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }} >
          <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Aidapp, Blr, India</h4>
          <div>
            <p>Served as a key member of the executive team charged with Front - End Development for the upcoming Projects for the company.</p>
            <p>Strategically managed Projects Especially the Front - End Work Built and managed a business development team to enhance and refine customer relationships and satisfaction.</p>
            <p>Collaborated advertising company to rebrand website, marketing materials and sales strategy resulting in increased brand awareness and sales.</p>
            <p>Made SaleDrive(Front - End) and Aidapp.in(Full Stack)</p>
            <p><a href='http://aidapp.in'>See Website</a></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date = "2018 - Current" iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} >
          <h3 className="vertical-timeline-element-title">Open Source Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">FreeCodeCamp</h4>
          <div>
            <p>Open Source Developer for Bootstrap 4 and React Router in Free Code Camp Official Guides.</p>
            <p>Writing Codes for Official FreeCodeCamp Website</p>
            <p>Getting Pull Request Accepted by Senior Developers for Approval of changes</p>
            <p><a href='http://freecodecamp.org'>See Website</a></p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  }
}
export default Timeline;
