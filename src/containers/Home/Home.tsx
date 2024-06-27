import { useEffect } from 'react';
import './Home.scss';
import myImage from "../../assets/images/me cut up4.png";
//import OrganisationCard from '../../components/OrganisationCard/OrganisationCard';
//import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import OrganisationsCarousel from '../OrganisationsCarousel/OrganisationsCarousel';
import About from '../About/About';

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
      
      <div className="home__more-info">
        
        <div className="home__content">
          <div className="home__content-section home__content-section--about ">
            <About /> 
          </div>
        </div>

      </div>
      <div className ="home__at-a-glance"></div>
      <OrganisationsCarousel />
    </div>
  );
};
  
  export default Home;