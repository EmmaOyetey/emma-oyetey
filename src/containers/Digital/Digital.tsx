import React from 'react';
import "./Digital.scss";
import projects from '../../Data/Digital';
import DigitalProjectCard from '../../components/DigitalProjectCard/DigitalProjectCard';

const Digital: React.FC = () => {
  return (
    <div className="digital">
      <div className="digital__projects-container">
        {projects.map((project, index) => (
          <div className="digital__project-card" key={index}>
            <DigitalProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital;


// import React, { useRef, useEffect, useState } from 'react';
// import "./Digital.scss";
// import projects from '../../Data/Digital';
// import DigitalProjectCard from '../../components/DigitalProjectCard/DigitalProjectCard';

// const Digital: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [thumbPosition, setThumbPosition] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//       const maxScrollLeft = scrollWidth - clientWidth;
//       const scrollFraction = scrollLeft / maxScrollLeft;
//       const thumbMaxPosition = clientWidth - (clientWidth * 0.5); // Adjust 0.5 based on the thumb width
//       setThumbPosition(scrollFraction * thumbMaxPosition);
//     }
//   };

//   const handleThumbMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//   };

//   const handleThumbMouseMove = (event: MouseEvent) => {
//     if (isDragging && containerRef.current) {
//       const { clientWidth, scrollWidth } = containerRef.current;
//       const thumbMaxPosition = clientWidth - (clientWidth * 0.5); // Adjust 0.5 based on the thumb width
//       const newThumbPosition = Math.max(0, Math.min(thumbMaxPosition, event.clientX - containerRef.current.offsetLeft));
//       setThumbPosition(newThumbPosition);
//       const scrollFraction = newThumbPosition / thumbMaxPosition;
//       containerRef.current.scrollLeft = scrollFraction * (scrollWidth - clientWidth);
//     }
//   };

//   const handleThumbMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleThumbMouseMove);
//     document.addEventListener('mouseup', handleThumbMouseUp);
//     return () => {
//       document.removeEventListener('mousemove', handleThumbMouseMove);
//       document.removeEventListener('mouseup', handleThumbMouseUp);
//     };
//   }, [isDragging]);

//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.addEventListener('scroll', handleScroll);
//     }
//     return () => {
//       if (containerRef.current) {
//         containerRef.current.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="digital">
//       <div className="digital__projects-container" ref={containerRef}>
//         {projects.map((project, index) => (
//           <div className="digital__project-card" key={index}>
//             <DigitalProjectCard project={project} />
//           </div>
//         ))}
//       </div>
//       <div className="digital__scroll-bar">
//         <div
//           className="digital__scroll-thumb"
//           style={{ left: `${thumbPosition}px` }}
//           onMouseDown={handleThumbMouseDown}
//         />
//       </div>
//     </div>
//   );
// };

// export default Digital;

// import React from 'react';
// import "./Digital.scss";
// import projects from '../../Data/Digital';
// import DigitalProjectCard from '../../components/DigitalProjectCard/DigitalProjectCard';

// const Digital: React.FC = () => {
//   return (
//     <div className="digital__projects-container">
//       {projects.map((project, index) => (
//         <DigitalProjectCard
//         key={index} 
//         project={project}
//          />
//       ))}
//     </div>
//   );
// };

// export default Digital;

//import React from 'react';
// import DigitalProjectCard from '../../components/DigitalProjectCard/DigitalProjectCard';
// import DigitalExp from '../../Data/Digital';
//import "./Digital.scss"; // Ensure you import the SCSS file

// const Digital = () => {
//     return (
//       <div>
//         <h2>My Journey with Digital Learning</h2>
//         <p>General blurb about journey with tech: Throughout my career, and increasingly so, I have enjoyed collaborating creatively with a diverse range of individuals to harness the power of digital technology. During my time at Reach Volunteering, I had the privilege of working with a fantastic team dedicated to overseeing a digital service that connects civil society organizations with volunteers offering their expertise. This experience allowed me to collaborate with various tech professionals, including a senior product manager, a full-stack developer, volunteer UX researchers, and data analysts, as well as pro bono legal and compliance experts. I was trusted and supported to take ownership of my learning, gaining proficiency in various collaboration tools and software. Additionally, I completed a course in user-centered service design with CAST, enjoying the synergy of this with my previous work on youth engagement.</p>
        
//         <div className="myPortfolio__skills">
//           <p>Salesforce</p>
//           <p>Drupal</p>
//           <p>RDB</p>
//           <p>WordPress</p>
//           <p>Twilio</p>
//           <p>SendGrid</p>
//           <p>Mailchimp</p>
//           <p>Trello</p>
//           <p>Airtable</p>
//           <p>Figma</p>
//           <p>Jamboard</p>
//           <p>Google Sheets</p>
//           <p>Google Classrooms</p>
//           <p>VoIP Studio</p>
//           <p>Excel</p>
//           <p>Word</p>
//           <p>Canva</p>
//           <p>SurveyMonkey</p>
//           <p>Adobe</p>
//           <p>Xero</p>
//           <p>Learnably</p>
//           <p>BreatheHR</p>
//           <p>Zoom</p>
//           <p>Slack</p>
//         </div>
  
//         <div className="myPortfolio__projects">
//           {DigitalExp.map((project, index) => (
//             <DigitalProjectCard key={index} project={project} />
//           ))}
//         </div>
  
//         <p>Leading a digital service and collaborating within diverse teams to craft digital solutions have been pivotal in leading me to _nology. Learning is at the core of who I am. I'm excited to dive into new challenges, and apply the skills and experiences I've gathered throughout my varied career and during my time with _nology.</p>
//         <p>Final Client Project Delivery: A real-life MVP for a development project, delivered as a Scrum team to a client who will use it for future development. It will include a React front-end and Spring back-end integration, including authentication and CI deployment to GCP.</p>
//         <p>Spring Boot Project: A properly architected and documented API following all modern design patterns, built using Spring and deployed using GCP.</p>
//         <p>Java Project: A Java Object Oriented application making use of multiple models and classes to run complex game logic from the command line.</p>
//         <p>React API Project: A React application that pulls data from an external public API and presents it in a dashboard or multipage layout.</p>
//         <p>JavaScript Game Project: A browser-based game using modern JavaScript programming techniques and DOM manipulation.</p>
//         <p>HTML/ CSS Portfolio Website: Built using correct version control and modern coding standards, and deployed live using a CI pipeline.</p>
//         <p>HTML5, CSS3, SASS, JavaScript, React, Jest, Cypress, React Testing Library, Github Actions, TDD, GCP, CI/CD, OOP, Java, Spring, and SQL</p>
//         <p><a href="https://github.com/nology-tech/wov-client-project">https://github.com/nology-tech/wov-client-project</a></p>
//         <p><a href="https://github.com/nology-tech/wov-client-project/blob/main/README.md">https://github.com/nology-tech/wov-client-project/blob/main/README.md</a></p>
//       </div>
//     );
//   };
  
 // export default Digital;