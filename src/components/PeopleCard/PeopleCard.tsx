import React, { useState } from 'react';
import "./PeopleCard.scss";
import { Card, CardContent, Typography } from '@mui/material';
import { PeopleType } from '../../Types/peopleTypes';

type PeopleCardProps = {
  person: PeopleType;
};

const PeopleCard: React.FC<PeopleCardProps> = ({ person }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card className={`people-card ${isFlipped ? 'people-card--flipped' : ''}`} onClick={handleCardFlip}>
      <CardContent className="people-card__content">
        <div className="people-card__front">
          <img src="https://rewirenewsgroup.com/wp-content/uploads/2022/03/rng-placeholder-person-silhouette-grey-800x533.jpg" alt="Person" className="people-card__image" />
          <Typography variant="h5" className="people-card__name">{person.name}</Typography>
        </div>
        <div className="people-card__back">
          <Typography variant="body1">I thank this person for:</Typography>
          <ul className="people-card--flip__items">
            {person.item.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PeopleCard;

// import React, { useState } from 'react';
// import "./PeopleCard.scss";
// import { Card, CardContent, Typography, CardActions } from '@mui/material';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
// import NorthWestIcon from '@mui/icons-material/NorthWest';
// import { PeopleType } from '../../Types/peopleTypes';

// type PeopleCardProps = {
//   person: PeopleType;
// };

// const PeopleCard: React.FC<PeopleCardProps> = ({ person }) => {
//   const [isFront, setIsFront] = useState(true);

//   const toggleCard = () => {
//     setIsFront(!isFront);
//   };

//   return (
//     <Card className={`people-card${isFront ? '' : ' people-card--back'}`}>
//       <CardContent className="people-card__content">
//         {isFront ? (
//           <>
//             <img src="https://rewirenewsgroup.com/wp-content/uploads/2022/03/rng-placeholder-person-silhouette-grey-800x533.jpg" alt="Person" className="people-card__image" />
//             <Typography variant="h5" className="people-card__name">{person.name}</Typography>
//             <NorthEastIcon className="people-card__icon" onClick={toggleCard} />
//           </>
//         ) : (
//           <>
//             <Typography variant="body1">I thank this person for:</Typography>
//             <ul className="people-card--back__items">
//               {person.item.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//             <NorthWestIcon className="people-card__icon" onClick={toggleCard} />
//           </>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

//export default PeopleCard;