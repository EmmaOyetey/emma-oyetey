import React, { useState } from 'react';
import "./OrganisationCard.scss";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import {ExperienceType} from '../../Types/experienceTypes';

type OrganisationCardProps = {
  organisation: ExperienceType["organisation"]; // Use OrganisationType from ExperienceType
  roles: ExperienceType["roles"]; // Use RoleType array from ExperienceType
  //notable?: string[]; // Optional notable array from ExperienceType
};

const OrganisationCard = ({ organisation, roles }: OrganisationCardProps) => {
  const [isFront, setIsFront] = useState(true);

  const truncateDescription = (description: string) => {
    const words = description.split(' ');
    if (words.length > 28) {
      return words.slice(0, 28).join(' ') + '...';
    }
    return description;
  };

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
            <p className="organisation-card__abrv-info">
              {truncateDescription(organisation.description)}
              <NorthEastIcon onClick={toggleCard} style={{ cursor: 'pointer' }} />
            </p>
          </>
        ) : (
          <>
            <h2 className="organisation-card__name">{organisation.name}</h2>
            {roles.length > 0 && (
              <div>
                <p className="organisation-card--back__dates">{`${roles[roles.length - 1].start_date} - ${roles[0].finish_date}`}</p>
                <h3 className="organisation-card--back__job-title">{roles[0].job_title}</h3>
              </div>
            )}
            <NorthEastIcon onClick={toggleCard} style={{ cursor: 'pointer' }} fontSize="small" />
          </>
        )}
      </div>
    </div>
  );
};

export default OrganisationCard;