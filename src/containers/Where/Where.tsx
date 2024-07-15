import React from 'react';
import "./Where.scss";
import organisations from '../../Data/Experience'; 
import OrganisationCard from '../../components/OrganisationCard/OrganisationCard';

const Where: React.FC = () => {
  return (
    <div className="where-container">
      {organisations.map((organisation, index) => (
        <OrganisationCard 
        key={index} 
        organisation={organisation.organisation}
        roles={organisation.roles} />
      ))}
    </div>
  );
};

export default Where;