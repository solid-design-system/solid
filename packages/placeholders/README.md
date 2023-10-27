# Placeholder Images

This folder contains placeholder images for all projects at Union Investment.

You can find their respective photographer and source below:

- [Architecture - Lance Anderson](https://unsplash.com/photos/JyAh_s_1RjY)
- [Coins - Towfiqu barbhuiya](https://unsplash.com/photos/jpqyfK7GB4w)
- [Coffeeshop - Brooke Cagle](https://unsplash.com/photos/-uHVRvDr7pg)
- [Collaboration - Austin Distel](https://unsplash.com/photos/jpHw8ndwJ_Q)
- [Family - Nathan Dumlao](https://unsplash.com/photos/Wr3comVZJxU)
- [Friends - Chewy](https://unsplash.com/photos/3cAMUE3YAO8)
- [Skyline - Tobias Reich](https://unsplash.com/photos/FDBy4lkZycM)
- [Workspace - Dan Dimmock](https://unsplash.com/photos/3mt71MKGjQ0)

## License

All above images are licensed under the [Unsplash License](https://unsplash.com/license).

`generic.jpg` contains an icon by Union Investment and is therefore only to be used if usage is explicitly granted by Union Investment.

## Usage

```bash
npm i @solid-design-system/placeholders
```

## Storybook integration

To integrate this package into your Storybook you need to add the following lines of code to the Storybook `main.js` file:

```js
  staticDirs: [
    {
      from: '../node_modules/@solid-design-system/placeholders/src/images',
      to: '/placeholders',
    },
  ],
```

After adding this package to the `staticDirs` of your Storybook the `src/images` folder will be included in your `storybook` build folder under the subfolder `storybook/placeholders`.
To reference a image in your story you can follow this example:

```js
'./placeholders/collaboration.jpg';
```
