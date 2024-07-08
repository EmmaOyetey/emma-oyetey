
//import React from 'react';
import './App.scss';
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ExpByOrgInfo from './containers/Experience/ByOrganisation/ByOrganisation';
import experience from './Data/Experience';
import { ExperienceType } from './Types/experienceTypes';
import WhiteDot from './containers/WhiteDot/WhiteDot';
import AllExperience from './containers/Experience/AllExperience/AllExperience';

const App = () => {

const getExperienceByOrganisationName = (organisationName: string): ExperienceType | undefined => {
    return experience.find(exp => exp.organisation.name.toLowerCase() === organisationName.toLowerCase());
  };

  type ExpByOrgInfoLoaderProps = {
    getExperienceByOrganisationName: (organisationName: string) => ExperienceType | undefined;
  };
  
  const ExpByOrgInfoLoader = ({ getExperienceByOrganisationName }: ExpByOrgInfoLoaderProps) => {
    const { organisationName } = useParams<{ organisationName: string }>();
    const experience = getExperienceByOrganisationName(organisationName!);
  
    if (!experience) {
      return <div>Experience not found</div>;
    }
  
    return <ExpByOrgInfo experience={experience} />;
  };
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organisation/:organisationName" element={<ExpByOrgInfoLoader getExperienceByOrganisationName={getExperienceByOrganisationName} />} />
          <Route path="/people" element={<WhiteDot />} />
          <Route path="/experience" element={<AllExperience experience={experience} />} />
        </Routes>
      </Router>
  )
}

export default App
