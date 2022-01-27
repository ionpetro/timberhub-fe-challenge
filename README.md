# 🪵 The official Timberhub front end challenge

> Implementing a pixel perfect ui, using state-of-the-art technologies

*Result:*

| Design | Implementation |
| :---: | :---: |
| <img src='https://res.cloudinary.com/ionpetro/image/upload/v1643319715/timberhub/timberhub_kyji4y.png' alt='timberhub design' /> | <img src='https://res.cloudinary.com/ionpetro/image/upload/v1643321474/timberhub/Screenshot_2022-01-28_at_12.11.00_AM_ovt763.png' alt='implementation' /> |

## Get started

* Clone the project:

```shell
git clone git@github.com:ionpetro/timberhub-fe-challenge.git
```

* Redirect to the directory created:

```shell
cd timberhub-fe-challenge
```

* Install dependencies and run development mode

```shell
yarn && yarn dev
```

Navigate to https://localhost:3000 and enjoy 🕹

## Data fetching

To serve data to the front end, I used the `Next.js` api routes that is implemented inside the framework. See `src/pages/api/projects.ts`.

In order to fetch data to the client, `axios` library was used.

## Technologies

### Tools

I used `React` with `NextJS`. 

Other development tools that were used are:

- **Eslint**: For coding standards
- **Prettier**: For code formatting
- **Husky**: For code linting before commits
- **Typescript**: for type checking and autocomplete.

### Styling

For styling, I chose `antd` component library followed by `less` preprocessor in order to demonstrate the use and set up of the library. `CSS modules` are also supported.

### Testing

I used `jest` and `@testing-library` to unit test a service and a component (demo purposes).

### Folder structure

Inside `/src` folder you can find a `/components` folder that hosts all the components of the app.
Inside that, each folder represent the wrapper of a next page, and that includes the components only relevant to that page.
Usually, you also have a `/shared` folder with the components used throughout the whole application. 

```
/components
|  <page>
|  |  <components_relevant_to_page>
/pages
```



