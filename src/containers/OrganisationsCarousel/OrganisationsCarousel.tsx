import Carousel from "../../components/Carousel/Carousel";
import OrganisationCard from "../../components/OrganisationCard/OrganisationCard";
import organisations from "../../Data/Experience";
import { OrganisationType } from "../../Types/experienceTypes";

const renderOrganisation = (organisation: OrganisationType) => <OrganisationCard {...organisation} />;

const OrganisationsCarousel = () => (
  <Carousel 
    items={organisations} 
    renderItem={renderOrganisation} 
    itemsToShow={2} 
    itemsToChange={1} 
  />
);

export default OrganisationsCarousel;