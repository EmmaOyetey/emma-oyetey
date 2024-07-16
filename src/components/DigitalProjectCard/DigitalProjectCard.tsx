import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import "./DigitalProjectCard.scss"; // Ensure you import the SCSS file if needed
import { DigitalType } from '../../Types/digitalTypes';

type DigitalProjectCardProps = {
    project: DigitalType;
}

const DigitalProjectCard: React.FC<DigitalProjectCardProps> = ({ project }) => {
    return (
        <div className="digital__project">
            <img
                src={project.image}
                className="digital__project__image"
                alt={`${project.name} project image`}
            />
            <div className="digital__project__header">
                <p className="digital__project__title">{project.name}</p>
                <div className="digital__project__link">
                    <a href={project.githubLink} className="digital__project__link--eye">
                        <VisibilityIcon />
                    </a>
                    <a href={project.codeLink} className="digital__project__link--code">
                        <CodeIcon />
                    </a>
                </div>
            </div>
            <p className="digital__project__skills">{project.skills.join(', ')}</p>
        </div>
    );
};

export default DigitalProjectCard;


// import React from 'react';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CodeIcon from '@mui/icons-material/Code';
// // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import "./DigitalProjectCard.scss"; // Ensure you import the SCSS file if needed
// import { DigitalType } from '../../Types/digitalTypes';

// type DigitalProjectCardProps = {
//     project: DigitalType;
// }

// const DigitalProjectCard: React.FC<DigitalProjectCardProps> = ({ project }) => {
//     return (
//       <div>
//         <div className="digital__project">
//             <img
//                 src={project.image}
//                 className="digital__project__image"
//                 alt={`${project.name} project image`}
//             />
//             <div className="digital__project__layoutContainer">
//                 <p className="digital__project__title">{project.name}</p>
//                 <div className="digital__project__link">
//                     <a
//                         href={project.githubLink}
//                         className="digital__project__link--eye"
//                     >
//                         <VisibilityIcon style={{ color: 'white' }} />
//                     </a>
//                     <a href={project.codeLink} className="digital__project__link--code">
//                         <CodeIcon style={{ color: 'white' }} />
//                     </a>
//                 </div>
//             </div>
//             <p className="digital__project__skills">{project.skills}</p>
//         </div>
//         <div>
//         <img
//                 src={project.image}
//                 className="digital__project__image"
//                 alt={`${project.name} project image`}
//             />
//            </div>
//         </div>
//     );
// };

// export default DigitalProjectCard;