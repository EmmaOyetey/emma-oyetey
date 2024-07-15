import Carousel from "../../components/Carousel/Carousel";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import organisations from "../../Data/Experience";
import { ExperienceType } from "../../Types/experienceTypes";
import "./ExperiencCarousel.scss";
//import "../../components/Carousel/Carousel.scss";
//import "../OrganisationsCarousel/OrganisationCarousel.scss"

const renderExperience = (experience: ExperienceType) => 
    <ExperienceCard
    experience={experience}
    />;

const ExperienceCarousel = () => (
  <Carousel 
    items={organisations} 
    renderItem={renderExperience} 
    itemsToShow={1} 
    itemsToChange={1} 
    className="carousel__experience"
  />
);

export default ExperienceCarousel;