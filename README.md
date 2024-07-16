# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
Photo by <a href="https://unsplash.com/@aaronburden?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Aaron Burden</a> on <a href="https://unsplash.com/photos/fountain-pen-on-spiral-book-xG8IQMqMITM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


  Photo by <a href="https://unsplash.com/@patrickian4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Fore</a> on <a href="https://unsplash.com/photos/black-corona-typewriter-on-brown-wood-planks-0gkw_9fy0eQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  Photo by <a href="https://unsplash.com/@langao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lan Gao</a> on <a href="https://unsplash.com/photos/an-open-door-in-a-dark-room-with-light-coming-in-KBuWjEVavM8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  Photo by <a href="https://unsplash.com/@filipkominik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Filip Kominik</a> on <a href="https://unsplash.com/photos/grey-hlalway-IHtVbLRjTZU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

  Photo by <a href="https://unsplash.com/@sinkdraws?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sin</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-hallway-with-lights-turned-on-in-the-middle-md7dKot5nc0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  Photo by <a href="https://unsplash.com/@joannakosinska?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joanna Kosinska</a> on <a href="https://unsplash.com/photos/string-lights-turned-on-9T_S-7oGZZU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  Photo by <a href="https://unsplash.com/@mikitayo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mikita Yo</a> on <a href="https://unsplash.com/photos/white-light-bulb-turned-on-during-nighttime-sxpFERYUqJI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

  Photo by <a href="https://unsplash.com/@martinpechy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Martin Péchy</a> on <a href="https://unsplash.com/photos/lights-turned-on-light-fixture-lBs7NrB2Cu8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
  for glass effect
  background-color: rgba(255, 255, 255, 0.08); /* more transparent white */
    //  backdrop-filter: blur(8px); /* apply blur for frosted glass effect */
    // margin-bottom: 2rem;


    Generic Carousel Component
The Carousel component is designed to be highly flexible and reusable across different parts of your application by leveraging TypeScript generics. This allows the component to handle various types of items dynamically.

Features
Type Safety: Ensures that the types of items passed to the carousel are consistent and type-checked by TypeScript.
Flexibility: Can be used to display different types of content, such as organizations or skills, by passing the appropriate item type and rendering function.
Customizable Display: Allows for setting the number of items to display at once and the number of items to change on navigation.
Usage
The Carousel component accepts the following props:

items: An array of items of type T.
renderItem: A function that takes an item of type T and returns a JSX element for rendering.
itemsToShow: The number of items to display at once.
itemsToChange: The number of items to change on each navigation action.
Example
Here’s how to use the generic Carousel component to display different types of content:

Organizations Carousel
tsx
Copy code
import Carousel from "./Carousel";
import OrganizationCard from "./OrganizationCard";
import organizations from "./data/organizations";

const renderOrganization = (organization) => <OrganizationCard {...organization} />;

const OrganizationsCarousel = () => (
  <Carousel 
    items={organizations} 
    renderItem={renderOrganization} 
    itemsToShow={2} 
    itemsToChange={1} 
  />
);

export default OrganizationsCarousel;
Skills Carousel
tsx
Copy code
import Carousel from "./Carousel";
import SkillCard from "./SkillCard";
import skills from "./data/skills";

const renderSkill = (skill) => <SkillCard {...skill} />;

const SkillsCarousel = () => (
  <Carousel 
    items={skills} 
    renderItem={renderSkill} 
    itemsToShow={4} 
    itemsToChange={2} 
  />
);

export default SkillsCarousel;
By using generics, the Carousel component can seamlessly adapt to different types of items and rendering requirements, ensuring both flexibility and type safety.

Responsive Design
The Carousel component is designed to be responsive, ensuring an optimal user experience across different screen sizes.

Features
CSS Media Queries: Uses CSS media queries to adjust the layout and behavior of the carousel based on the screen size. For example, on smaller screens, the carousel changes from horizontal to vertical scrolling.
Dynamic Item Count: Adjusts the number of items displayed based on the screen size. On mobile devices, the carousel displays one item at a time, while on larger screens, it can display multiple items.
Vertical Scrolling on Mobile: On mobile devices, the carousel switches to vertical scrolling to better fit the smaller screen size.
Usage
The component automatically adjusts its layout and item count based on the window size, ensuring that your content is always displayed in the best possible way.

cause people helped me value what i had to offer and gave me the passion and support to achieve it

tab wit female outline in front of each or words with people hiddden underneath
Katie Ryan -outdoors laughter and love
Mrs Higgins - helped me realise my intellect 
Gillian Greeenslade - feroucious and bold to have a voice
lizzy - equality and integrity
Tracey Herald Vicars - cretivity empathy and thoughtleadership
Veronica - joy and self belief and kindness
janet thorne - change maker and innovation nad introductin to passion for digital
kate o'neil - pure talent and crafting importance of friendhip and compnionship
Naima Oyetey - self belief, individualism and opportunity, pure joy and unbounding love
Redcar, billie eilsih floetry beutiful words soken thrugh poetry and song

student x - face in front of each / or image eg celotape / flipbook
who wrapped thier face in celotape
isolated in the block recieveing printouted out 
who sat curled up on the floor on a locked toilet cubicle
who pursued thier own interst and created flipbooks watching 
eyes - faces of fear , sadness anxiety and faces of joy achievement
child that sdworn at me thi something or somebody thrown soemthing in frustration
asked why and what do i need to do differently
its ok to be angry use it positively

Mr Walters kindness mathematical ability
monday was special creativity joy and laughter kindness
tope carl wayne veronica joy of working in diverse teams and the challenge we still face for equality
teams - archery dog walking bringing yurself to work

--------------------------------------------------------------------------------

To achieve the functionality where the headers (WHERE, WHAT, and WHO) appear in line and the respective content sections only appear when clicked, we need to:

Update the JSX to manage the visibility of the content sections.
Add state management to handle which section is currently active.
Update the CSS to properly style the headers and the hidden/shown states of the content sections.
Step 1: Update the JSX and add state management
Add state to manage the active section and update the handlers for the clicks:

tsx
Copy code
import { useState, useEffect } from "react";
import "./Home.scss";
import About from "../About/About";
import OrganisationsCarousel from "../OrganisationsCarousel/OrganisationsCarousel";
import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel";
import PeopleCarousel from "../PeopleCarousel/PeopleCarousel";
import Where from "../Where/Where";

const Home = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleHeaderClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = document.querySelector(".home__about-me");
      if (aboutMe) {
        const aboutMeTop = aboutMe.getBoundingClientRect().top;
        const aboutMeVisible =
        aboutMeTop <= window.innerHeight / 2;

        if (aboutMeVisible) {
          aboutMe.classList.add("visible");
        } else {
          aboutMe.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="home__landing-page">
        <h1 className="home__landing-page__name">Emma Oyetey</h1>
        <h3 className="home__landing-page__overview">
          Education, Volunteering, Software Engineering
        </h3>
      </div>

      <div className="home__about-me">
        <div className="home__about-me--content">
          <div className="home__content-section home__content-section--about ">
            <About />
          </div>
        </div>
      </div>

      <div className="home__sections">
        <h2 
          className={`home__section__header ${activeSection === "where" ? "active" : ""}`} 
          onClick={() => handleHeaderClick("where")}
        >
          --- WHERE ---
        </h2>
        <h2 
          className={`home__section__header ${activeSection === "what" ? "active" : ""}`} 
          onClick={() => handleHeaderClick("what")}
        >
          --- WHAT ---
        </h2>
        <h2 
          className={`home__section__header ${activeSection === "who" ? "active" : ""}`} 
          onClick={() => handleHeaderClick("who")}
        >
          --- WHO ---
        </h2>
      </div>

      {activeSection === "where" && (
        <div className="home__section__content home__section__content--where">
          <Where />
        </div>
      )}

      {activeSection === "what" && (
        <div className="home__section__content home__section__content--what">
          <ExperienceCarousel />
        </div>
      )}

      {activeSection === "who" && (
        <div className="home__section__content home__section__content--who">
          <PeopleCarousel />
        </div>
      )}
    </div>
  );
};

export default Home;
Step 2: Update the SCSS
Add the necessary styles for the headers and content sections:

scss
Copy code
@use "../../styles/variables" as *;

.home {
  padding: 2rem;
  margin: 1rem;
  
  &__landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;

    &__name {
      font-size: 10rem;
      margin-bottom: 1rem;
    }

    &__overview {
      font-size: 1.3rem;
      color: $color-white;
    }
  }

  &__about-me {
    height: 100vh;
    display: flex;
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    opacity: 0;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__sections {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    
    &__header {
      cursor: pointer;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: $color-black;

      &.active {
        color: $color-primary; // Highlight the active section
      }
    }
  }

  &__section__content {
    display: none;
    &.home__section__content--where {
      display: block;
    }
    &.home__section__content--what {
      display: block;
    }
    &.home__section__content--who {
      display: block;
    }
  }
}
Explanation:
State Management: The activeSection state tracks which section header is clicked. When a header is clicked, the corresponding content section becomes visible.
Header Click Handlers: The handleHeaderClick function toggles the visibility of the content sections based on the clicked header.
Conditional Rendering: The content sections (Where, What, and Who) are conditionally rendered based on the activeSection state.
Styling:
Headers: The headers are styled to indicate the active section using the .active class.
Content Sections: Initially, the content sections are hidden (display: none). When the corresponding header is clicked, the content section becomes visible (display: block).
This setup will display the headers in line and show the respective content sections only when their headers are clicked, providing a clean and interactive user experience.