import Carousel from "../../components/Carousel/Carousel";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";
import organisations from "../../Data/Experience";
import { ExperienceType } from "../../Types/experienceTypes";
//import "../../components/Carousel/Carousel.scss";
//import "../OrganisationsCarousel/OrganisationCarousel.scss"

const renderOrganisation = (organisation: ExperienceType) => 
    <OrganisationCard
    organisation={organisation.organisation}
    roles={organisation.roles}
    />;

const OrganisationsCarousel = () => (
  <Carousel 
    items={organisations} 
    renderItem={renderOrganisation} 
    itemsToShow={3} 
    itemsToChange={3} 
  />
);

export default OrganisationsCarousel;