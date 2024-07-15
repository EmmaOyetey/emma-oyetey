import myImage from "../../assets/images/me cut up4.png";
import "./About.scss";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__image-container">
          <img className="about__image" src={myImage} alt="Image of Emma" />
        </div>
        <div className="about__content">
          <h1 className="about__title">
            <span style={{ color: "black" }}></span> ME
          </h1>
          <div className="about__info">
            <p>
              People focused and data driven; prioritising
              relationships, and empathy, alongside taking
              decisions based on objective data and evidence.
            </p>
            <br />
            <p>
              Creative, integrous and determined; enjoying building trusted
              relationships as part of diverse cross functional teams.
            </p>
            <br />
            <p>
              Passionate about Human-centred service design , and working within
              organisations that have a strong culture of collaboration and
              learning.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

// taking decisions that are both human-centered and empirically sound.//
