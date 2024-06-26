import React, { useEffect } from 'react';
import './Home.scss';
import myImage from "../../assets/images/me cut up4.png";
import OrganisationCard from '../../components/OrganisationCard/OrganisationCard';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const moreInfoSection = document.querySelector(".home__more-info");
      if (moreInfoSection) {
        const moreInfoSectionTop = moreInfoSection.getBoundingClientRect().top;
        const moreInfoSectionVisible =
          moreInfoSectionTop <= window.innerHeight / 2;

        if (moreInfoSectionVisible) {
          moreInfoSection.classList.add("visible");
        } else {
          moreInfoSection.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experienceItems = [
    "People",
    "Programmes & Projects",
    "Policy & Process",
    "Data",
    "Digital",
  ];

  return (
    <div className="home">
      <div className="home__landing-page">
        <h1 className="home__name">Emma Oyetey</h1>
        <h2 className="home__overview">N11</h2>
      </div>
      <OrganisationCard 
      name = "vInspired"
      location = "London"
      overview='blah blah blah blah blah blah ablah blah blah' 
      date = "2012 - 2014"
      jobRole = "Director of Education & Content"
      />
      <div className="home__more-info">
        <div className="home__image-container">
          <img className="home__image" src={myImage} alt="Image of Emma" />
        </div>
        <div className="home__content">
          <div className="home__content-section home__content-section--about ">
            <h2 className="home__content-title">
              <span style={{ color: "#76e1e1" }}> //</span> ABOUT
            </h2>
            <div className="home__content-info home__content-info--about">
              <p>
              A people focused and data driven senior leader; prioritising relationships, empathy, and understanding team dynamics and individuals alongside making decisions based on objective data and evidence, taking decisions that are both human-centered and empirically sound.
              </p>
              <br />
              <p>
              Creative, integrous and determined, I am quick to build trusted relationships and enjoy working as part of strong cross functional teams and have a passion for Human-centred service design , within organisations that have a strong culture of collaboration and learning</p>
              <p>
              
              </p>
            </div>
          </div>
          <div className="home__content-section home__content-section--experience">
            <h2 className="home__content-title">
              <span style={{ color: "#76e1e1" }}> // </span>
              EXPERIENCE
            </h2>
            <div className="home__content-info home__content-info--experience">
              {experienceItems.map((item, index) => (
                <div key={index} className="home__content-experience-item">
                  <p>
                    {item}{" "}
                    {index < experienceItems.length && (
                      <NorthEastIcon fontSize="large" />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <OrganisationCard 
      name = "myBnk"
      location = "London"
      overview='blah blah blah blah blah blah ablah blah blah' />
    </div>
  );
};
  
  export default Home;