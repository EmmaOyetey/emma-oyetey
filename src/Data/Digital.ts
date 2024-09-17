import {DigitalType} from "../Types/digitalTypes";

import ravenImage from "../assets/images/raven4.png";
import ravenVideo from "../assets/videos/ravenDemo.mp4";
import tuneTeezerImage from "../assets/images/TuneTeezer2.png";
import tuneTeezerVideo from "../assets/videos/tuneTeezrDemo.mp4";
import wovImage from "../assets/images/wov2.png";
import comingSoonVideo from "../assets/videos/comingSoonDemo.mp4";
import calculatorImage from "../assets/images/calculator.png";
import claculatorVideo from "../assets/videos/calculatorDemo.mp4";
import geolocationImage from "../assets/images/geolocation2.png";
import geolocationVideo from "../assets/videos/geolocationDemo.mp4";
import hangmanImage from "../assets/images/hangman4.png";
import hangmanVideo from "../assets/videos/hangmanDemo.mp4";
import cardTecImage from "../assets/images/cardTec.png";
import meetUpImage from "../assets/images/calendar2.png";


const Project : DigitalType[] = [
    {
      name: "Raven",
      organisation: [10],
      image: ravenImage,
      demoVideo: ravenVideo,
      codeLink: "https://github.com/EmmaOyetey/game",
      githubLink: ravenVideo,
      skills: ["Java", "Typescript", "Vite", "React", "SCSS", "Spring", "Spring Boot", "MySQL"],
      more:"Drawing on my experience in both the charitable and education sectors, Raven was inspired by the need for charitable services to be more accessible, whilst also providing transparency regarding the quality and impact of the support offered. Giving education providers the opportunity to easily find and connect with the quality services they need and want...",
    },
    {
      name: "TuneTeezr",
      organisation: [10],
      image: tuneTeezerImage,
      demoVideo: tuneTeezerVideo,
      codeLink: "https://github.com/EmmaOyetey/game",
      githubLink: "https://emmaoyetey.github.io/game/",
      skills: ["Typescript", "Vite", "SCSS", "DOM manipulation", "Mobile First Design"],
      more:"Inspired by heardle, and my love for music, players guess the artist or band based on the song's intro. Creating accessible education content has been a passion in previous roles, this has influenced my approach to the design of this game. I've used simple reveals and animations (pulse) to guide users through, alongside audio to communicate incorrect guesses and the event of a win or loss. Avoiding wordy instructions...",
    },
    {
        name: "WOV",
        organisation: [10],
        image: wovImage,
        demoVideo: comingSoonVideo,
        codeLink: "https://github.com/nology-tech/wov-client-project/blob/main/README.md",
        githubLink: comingSoonVideo,
        skills: ["React", "Spring", "SCSS", "Storybook", "Vitest & RTL", "Firebase", "Figma", "Trello", "Github Actions"],
        more:"I enjoyed working on the WOV project, creating a real-life MVP delivered as part of a Scrum team to a client for future development. This project, reminded me of the challenges and rewards of being a learner. Pair programming with peers required vulnerability and openness to learn from others, while being honest about my own capabilities and appreciating the strengths of others. This collaborative environment fostered both personal and professional growth.",
      },
      {
        name: "Calculator",
        organisation: [10],
        image: calculatorImage,
        demoVideo: claculatorVideo,
        codeLink: "https://github.com/EmmaOyetey/calculator/tree/main",
        githubLink: "https://emmaoyetey.github.io/calculator/",
        skills: ["Vite", "Typescript", "SCSS",],
        more:"Baught up in 80's, calculators were going to make us stupid.. now we are facing AI. Does AI make us redundant or just force us to change the way we do things and use our energies. I'm interested to explore how tech and AI can transoform our education systems for the better. As for the calculator it got me thinking about BODMAS. How do we teach concepts through our design & content and how do our users interactions inform our content & design? to BODMAS or not to BODMAS?!!! ",
      },
      {
        name: "Geolocation",
        organisation: [10],
        image: geolocationImage,
        demoVideo: geolocationVideo,
        codeLink: "https://github.com/EmmaOyetey/geolocation",
        githubLink: geolocationVideo,
        skills: ["WaeherAPI", "Typescript", "Here maps API", "Vite", "React", "SCSS",],
        more:"This project is a geolocation-based application that displays current weather and forecasts based on geolocation coordinates and a Map component centered on the user's location. This project provided an opportunity to get familiar with the common skill of using the users location to customise an experience.",
      },
      {
        name: "Hangman",
        organisation: [10],
        image: hangmanImage,
        demoVideo: hangmanVideo,
        codeLink: "https://github.com/EmmaOyetey/hangman",
        githubLink: hangmanVideo,
        skills: ["Java", "OOP",],
        more:"This command-line version of the classic Hangman game, was a great introudction to Java programming and OOP principles. The game includes a variety of words to guess and features like score tracking. I enjoyed incorprtaing a visual representation of the hangman using ascii elements and ensuring the ongoing display of previous guesses as would be seen in a pen and paper version.",
      },
      {
        name: "cardTEC",
        organisation: [10],
        image: cardTecImage,
        demoVideo: comingSoonVideo,
        codeLink: "https://github.com/EmmaOyetey/cards-tec",
        githubLink: comingSoonVideo,
        skills: ["Typescript", "Java", "OOP",],
        more:"I enjoyed the process of pair programming to develop CardsTEC, which includes the popular card games; War, Blackjack, and Old Maid, all designed with Object-Oriented Programming (OOP) principles. Anyone who has played 'War' knows how endless this game can be! To make demoing easier, we implemented a smaller deck, avoiding the seemingly endless rounds typical of the full game.",
      },
      {
        name: "MeetUp Calendar",
        organisation: [10],
        image: meetUpImage,
        demoVideo: comingSoonVideo,
        codeLink: "https://github.com/EmmaOyetey/calendar",
        githubLink: comingSoonVideo,
        skills: ["Typescript", "Java", "OOP",],
        more:"This Java-based application helps users manage their calendars, schedule meetings, adjust working hours, and find mutual free time slots with other users. This project was a good opportunity to reinforce learnings and my understanding of key Object-Oriented Programming (OOP) principles to ensure a modular, maintainable, and extensible codebase.",
      },
    ];
    
export default Project;