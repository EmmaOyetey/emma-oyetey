import myImage from "../../assets/images/me cut up4.png";
import "./About.scss";
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <>
    <div className="about">
        <div className="about__image-container">
          <img className="about__image" src={myImage} alt="Image of Emma" />
        </div>
        <div className="about__content">
            <p>
            People-focused and data-driven; prioritising relationships and empathy while making decisions based on evidence and data.
            </p>
            <br />
            <p>
            Creative, honest, and determined; valueing opportunities to work within organisations with a strong culture of collaboration and learning  
            </p>
            <br />
            <p>
            Committed to building trusted relationships; embracing diversity and inclusion 
            </p>
            <br />
            <p>
            Passionate and expereinced in education, community action, and Human-centred service design
            </p>
        </div>
    </div>  
    </>
  );
};

export default About;

// taking decisions that are both human-centered and empirically sound.//
