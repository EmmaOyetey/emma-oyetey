import React, { useState } from 'react';
import "./OrganisationCard.scss";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import {ExperienceType} from '../../Types/experienceTypes';
import { Link } from 'react-router-dom'; 

type OrganisationCardProps = {
  organisation: {
    name: string;
    location: string;
    tagline: string;
    description: string;
    organisation_url: string;
  };
  roles?: {
    job_title: string;
    start_date: string;
    finish_date: string;
  }[];
};

const OrganisationCard = ({ organisation, roles }: OrganisationCardProps) => {
  const [isFront, setIsFront] = useState(true);

  // const truncateDescription = (description: string) => {
  //   const words = description.split(' ');
  //   if (words.length > 28) {
  //     return words.slice(0, 28).join(' ') + '...';
  //   }
  //   return description;
  // };

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <div className={`organisation-card${isFront ? '' : ' organisation-card--back'}`}>
      <div className="organisation-card__content">
        {isFront ? (
          <>
            <h2 className="organisation-card__name">{organisation.name}</h2>
            <h3 className="organisation-card__location">{organisation.location}</h3>
            
            <p className="organisation-card__tagline">
              {organisation.tagline}
            </p>
            
            <NorthEastIcon 
            onClick={toggleCard} 
            style={{ cursor: 'pointer' }}
            className="organisation-card__icon"
            />
            
          </>
        ) : (
          <>
            <h2 className="organisation-card__name">{organisation.name}</h2>
            {roles && roles.length > 0 && (
              <div>
                <h3 className="organisation-card--back__job-title">{roles[0].job_title}</h3>
                <p className="organisation-card--back__dates">{`${roles[roles.length - 1].start_date} - ${roles[0].finish_date}`}</p>
                <Link to={`/organisation/${organisation.name}`} className="organisation-card__more-link">More</Link>
              </div>
            )}
            <NorthWestIcon 
            onClick={toggleCard} 
            style={{ cursor: 'pointer' }} 
            className="organisation-card__icon"
            />
            
          </>
        )}
      </div>
    </div>
  );
};

export default OrganisationCard;