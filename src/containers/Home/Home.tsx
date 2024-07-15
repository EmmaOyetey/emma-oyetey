import { useEffect } from "react";
import "./Home.scss";
import About from "../About/About";
import OrganisationsCarousel from "../OrganisationsCarousel/OrganisationsCarousel";
import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel";
import PeopleCarousel from "../PeopleCarousel/PeopleCarousel";
import Where from "../Where/Where";

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

  return (
    <div className="home">
      <div className="home__landing-page">
        <h1 className="home__landing-page__name">Emma Oyetey</h1>
        <h3 className="home__landing-page__overview">
          Education, Volunteering, Software Engineering
        </h3>
      </div>

      <div className="home__more-info">
        <div className="home__content">
          <div className="home__content-section home__content-section--about ">
            <About />
          </div>
        </div>
      </div>

      <div className="home__section home__section--where">
        <h2 className="home__section__header home__section__header--where">--- WHERE ---</h2>
        <div><Where /></div>
      </div>
      
      
      <div className="home__section home__section--what">
        <p className="home__section__header home__section__header--what">--- WHAT ---</p>
        <div className="home__section__content home__section__content--what"><ExperienceCarousel /></div>
      </div>
      
      <div className="home__section home__section--who">
        <p className="home__section__header home__section__header--who">--- WHO ---</p>
        <div><PeopleCarousel /></div>
      </div>
      
    </div>
  );
};

export default Home;


{/* <div className = "home__people-container">
      <PeopleContainer people={people} />
      </div> */}