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
  
  