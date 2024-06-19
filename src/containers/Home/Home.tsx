import React, { useEffect } from 'react';
import './Home.scss';
import myImage from "../../assets/images/me.jpg";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const moreInfoSection = document.querySelector('.home__more-info');
      if (moreInfoSection) {
        const moreInfoSectionTop = moreInfoSection.getBoundingClientRect().top;
        const moreInfoSectionVisible = moreInfoSectionTop <= window.innerHeight / 2;

        if (moreInfoSectionVisible) {
          moreInfoSection.classList.add('visible');
        } else {
          moreInfoSection.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const experienceItems = [
      'People',
      'Programmes & Projects',
      'Policy & Process',
      'Data',
      'Digital'
    ];
  
    return (
      <div className="home">
        <div className="home__landing-page">
          <h1 className="home__name">Emma Oyetey</h1>
          <h2 className="home__overview">Add one line about me here</h2>
        </div>
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
                <p>Blurb about varied career. passion for social prpose organisations. working collaboritvely</p>
                <p>Experienced senior leader blah blah blah blah blah blah blah</p>
                <p>Collaborative diverse teams</p>
                <p>lsdjg  woef pofi pweo powei powei powei pei poei powe powe wpoe pweo.</p>
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
                    <p>{item} {index < experienceItems.length && <NorthEastIcon fontSize="large" />}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;