import myImage from "../../assets/images/me cut up4.png";
import "./About.scss"
const About =() => {

    return (
        <>
            < div className="about">
                <div className = "about__image-container">
                    <img className="about__image" src={myImage} alt="Image of Emma" />
                </div>
                <div className="about__content">
                    <h1 className="about__title">
                        <span style={{ color: "#76e1e1" }}> //</span> ABOUT
                    </h1>
                    <div className="about__info">
                        <p>
                            A people focused and data driven senior leader; prioritising relationships, empathy, and understanding individual and team dynamics alongside making decisions based on objective data and evidence. 
                        </p>
                        <br />
                        <p>
                            Creative, integrous and determined, I am quick to build trusted relationships and enjoy working as part of strong cross functional teams. 
                        </p>
                        <br />
                        <p>
                            I have a passion for Human-centred service design , within organisations that have a strong culture of collaboration and learning
                        </p>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default About;

// taking decisions that are both human-centered and empirically sound.//