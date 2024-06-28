import React from 'react';
import "./PeopleContainer.scss";
import PeopleCard from '../../components/PeopleCard/PeopleCard'; // Make sure to import PeopleCard component
import { PeopleType } from '../../Types/peopleTypes';

type PeopleContainerProps = {
  people: PeopleType[];
};

const PeopleContainer: React.FC<PeopleContainerProps> = ({ people }) => {
  return (
    <div className="people-container">
      {people.map((person, index) => (
        <PeopleCard key={index} person={person} />
      ))}
    </div>
  );
};

export default PeopleContainer;