import React, { useState } from 'react';
import "./OrganisationCard.scss";
import NorthEastIcon from '@mui/icons-material/NorthEast';

type OrganisationCardProps = {
  name: string;
  location: string;
  overview: string;
  date?: string; // Optional prop for the date
  jobRole?: string; // Optional prop for the job role
};

const OrganisationCard = ({ name, location, overview, date, jobRole }: OrganisationCardProps) => {
  const [isFront, setIsFront] = useState(true);

  const truncateDescription = () => {
    const words = overview.split(' ');
    if (words.length > 28) {
      return words.slice(0, 28).join(' ') + '...';
    }
    return overview;
  };

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <div className={`organisation-card${isFront ? '' : ' organisation-card--back'}`}>
      <div className="organisation-card__content">
        {isFront ? (
          <>
            <h2 className="organisation-card__name">{name}</h2>
            <h3 className="organisation-card__location">{location}</h3>
            <p className="organisation-card__abrv-info">
              {truncateDescription()}
              <NorthEastIcon onClick={toggleCard} style={{ cursor: 'pointer' }} />
            </p>
          </>
        ) : (
          <>
            <h2 className="organisation-card__name">{name}</h2>
            {date && <h3 className="organisation-card--back__date">{date}</h3>}
            {jobRole && (
              <p className="organisation-card--back__job-role">
                {jobRole}
                <NorthEastIcon onClick={toggleCard} style={{ cursor: 'pointer' }} fontSize="small" />
              </p>
            )}
            <div className="organisation-card--back__skills-tags">
              {/* Render skill tags here if needed */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrganisationCard;