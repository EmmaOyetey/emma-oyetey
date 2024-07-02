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

  const splitTagline = (tagline: string) => {
    const maxLengthFirstLine = 35; // Define the maximum length for the first line

    // Find the last space within the max length for the first line
    let splitIndex = tagline.lastIndexOf(' ', maxLengthFirstLine);

    // If there's no space found within the max length, use the full max length
    if (splitIndex === -1) {
      splitIndex = maxLengthFirstLine;
    }

    const firstLine = tagline.slice(0, splitIndex).trim();
    const secondLine = tagline.slice(splitIndex).trim();
    return { firstLine, secondLine };
  };

  const { firstLine, secondLine } = splitTagline(organisation.tagline);

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <div className={`organisation-card${isFront ? '' : ' organisation-card--back'}`}>
      <div className="organisation-card__content">
        {isFront ? (
          <>
            <h2 className="organisation-card__name">{organisation.name}</h2>
            <p className="organisation-card__location">
             {organisation.location}
            </p>
            
            <div className="organisation-card__tagline-container">
              <p className="organisation-card__tagline">{firstLine}</p>
              <p className="organisation-card__tagline">{secondLine}</p>
            </div>
            
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
                <span style={{ display: 'block', textAlign: 'right' }}>
                  <Link to={`/organisation/${organisation.name}`} className="organisation-card--back__more-link">More</Link>
                </span>
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