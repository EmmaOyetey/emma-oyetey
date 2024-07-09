//import { Person } from "@mui/icons-material";
import Carousel from "../../components/Carousel/Carousel";
import PeopleCard from "../../components/PeopleCard/PeopleCard";
import people from "../../Data/People";
import { PeopleType } from "../../Types/peopleTypes";
//import "../../components/Carousel/Carousel.scss";
//import "../OrganisationsCarousel/OrganisationCarousel.scss"

const renderPeople = (people: PeopleType) => 
    <PeopleCard person ={people}
    />;

const PeopleCarousel = () => (
  <Carousel 
    items={people} 
    renderItem={renderPeople} 
    itemsToShow={4} 
    itemsToChange={4} 
  />
);

export default PeopleCarousel;