import React from 'react';
import "./AllExperience.scss";
import ExperienceCard from '../../../components/ExperienceCard/ExperienceCard';
import { ExperienceType } from '../../../Types/experienceTypes';
//import Carousel from '../../components/Carousel/Carousel';

type AllExperienceProps = {
  experience: ExperienceType[];
};

const AllExperience: React.FC<AllExperienceProps> = ({ experience }) => {
  return (
    
      <div className="all-experience">
      {experience.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
    
  );
};

export default AllExperience; 

// import Carousel from "../../../components/Carousel/Carousel";
// import ExperienceCard from "../../../components/ExperienceCard/ExperienceCard";
// import organisations from "../../../Data/Experience";
// import { ExperienceType } from "../../../Types/experienceTypes";
// //import "../../components/Carousel/Carousel.scss";
// //import "../OrganisationsCarousel/OrganisationCarousel.scss"

// const renderOrganisation = (organisation: ExperienceType) => 
//     <ExperienceCard
//     experience={organisation}
//     />;

// const OrganisationsCarousel = () => (
//   <Carousel 
//     items={organisations} 
//     renderItem={renderOrganisation} 
//     itemsToShow={1} 
//     itemsToChange={1} 
//   />
// );

// export default OrganisationsCarousel;