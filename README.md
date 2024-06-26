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

