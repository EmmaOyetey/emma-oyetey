import {ExperienceType} from "../../../Types/experienceTypes";
//import experience from "../../../Data/Experience";
import "./ByOrganisation.scss";
import { Link,} from "react-router-dom";
//import { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';

type ExpByOrgProps = {
  experience: ExperienceType;
 };

const ExpByOrgInfo = ({ experience }: ExpByOrgProps) => {
const ExperienceTags = experience.tags || [];
const defaultImageUrl = "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";
const AchievementsItems = experience.achievements.item || [];
const AchievementsLinks = experience.achievements.link || [];

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [organisationId]);

//   const supportAreas = Object.keys(organisation)
//     .filter((key) => organisation[key as keyof OrganisationType] === true)
//     .map((key) => key.replace(/([A-Z])/g, ' $1').trim())
//     .map((key) =>
//       key
//         .split(' ')
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ')
//     );

    return (
        <>
    <article className="organisation-info">
      <div className="organisation-info__banner">
        <Link to="/" className="organisation-info__close-link">
          <CloseIcon />
        </Link>
      </div>
      <div className="organisation-info__content">
        <div className="organisation-info__header">
          <div className="organisation-info__details">
            <h2 className="organisation-info__name">{experience.organisation.name}</h2>
            <div className="organisation-info__support-areas">
              <h3 className="organisation-info__support-areas-header">Tags:</h3>
              <ul className="organisation-info__support-areas-list">
                {ExperienceTags.map((area, index) => (
                  <li className="organisation-info__support-area" key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
          <img className="organisation-info__image" src={defaultImageUrl} alt={experience.organisation.name} />
        </div>
              <h3 className="organisation-info__overview-header">About:</h3>
              <p className="organisation-info__overview">{experience.organisation.description ?? `No description available`}</p>
              <h3 className ="organiastion-info__achievements"></h3>
              <ul className="organisation-info__achievements-list">
                {AchievementsItems.map((area, index) => (
                  <li className="organisation-info__support-area" key={index}>{area}</li>
                ))}
              </ul>
              <h3 className="organisation-info__links-header">Find out More:</h3>
              <p className="organisation-info__website-link">
                For more info visit: <a href={experience.organisation.organisation_url} target="_blank" rel="noopener noreferrer">{experience.organisation.organisation_url}</a>
              </p>
              <p className="organisation-info__achievement-link">
                Find out about their impact: <a href={experience.organisation.organisation_url} target="_blank" rel="noopener noreferrer">{experience.organisation.organisation_url}</a>
              </p>
              <ul className="organisation-info__achievements-list">
                {AchievementsLinks.map((area, index) => (
                  <li className="organisation-info__support-area" key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </article>
          </>
        );
      };
      
      export default ExpByOrgInfo;