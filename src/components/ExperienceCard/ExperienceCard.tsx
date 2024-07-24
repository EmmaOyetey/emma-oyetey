import { useState } from 'react';
import { ExperienceType } from "../../Types/experienceTypes";
import "./ExperienceCard.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ExpCardProps = {
  experience: ExperienceType;
};

const ExpCard = ({ experience }: ExpCardProps) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const experienceTags = experience.tags || [];
  const defaultImageUrl = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
  const achievementItems = experience.achievements?.item || [];
  const achievementLinks = experience.achievements?.link || [];

  return (
    
      <div className="organisation-info__content">
        <div className="organisation-info__header">
          <div className="organisation-info__details">
            <h2 className="organisation-info__name">{experience.organisation.name}</h2>
            <div className="organisation-info__tags">
              <ul className="organisation-info__tags-list">
                {experienceTags.map((tag, index) => (
                  <li className="organisation-info__tags-item" key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <img className="organisation-info__image" src={defaultImageUrl} alt={experience.organisation.name} />
        </div>

        <div className="organisation-info__section">
          <h3 className="organisation-info__toggle-header" onClick={() => setShowAbout(!showAbout)}>
             <ExpandMoreIcon className={`organisation-info__toggle-icon ${showAbout ? 'expanded' : ''}`} />About
          </h3>
          {showAbout && (
            <p className="organisation-info__overview">{experience.organisation.overview ?? `No description available`}</p>
          )}
        </div>

        <div className="organisation-info__section">
          <h3 className="organisation-info__toggle-header" onClick={() => setShowAchievements(!showAchievements)}>
             <ExpandMoreIcon className={`organisation-info__toggle-icon ${showAchievements ? 'expanded' : ''}`} />Achievements
          </h3>
          {showAchievements && (
            <ul className="organisation-info__achievements-list">
              {achievementItems.map((item, index) => (
                <li className="organisation-info__achievement-item" key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="organisation-info__section">
          <h3 className="organisation-info__toggle-header" onClick={() => setShowLinks(!showLinks)}>
            <ExpandMoreIcon className={`organisation-info__toggle-icon ${showLinks ? 'expanded' : ''}`} />Explore My Work 
          </h3>
          {showLinks && (
            <ul className="organisation-info__links-list">
              {achievementLinks.map((link, index) => (
                <li className="organisation-info__link-item" key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
   
  );
};

export default ExpCard;