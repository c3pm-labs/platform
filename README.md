# c3pm Frontend

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Overview](#overview)
- [Deploy for development](#deploy-for-development)
- [Deploy for production](#deploy-for-production)
- [Contribute](#contribute)
      - [Pages](#pages)
      - [Component](#component)
      - [Storybook](#storybook)
      - [Generic functions](#generic-functions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

Here is the **c3pm** webapp. It contains all pages of the web application.
It is built with React.js using the TypeScript language.


## Deploy for development

To deploy the application locally, you will need to have installed
Node.js

Install all dependencies and run the project with:
```bash
npm install
npm run dev
```
Then you should find the app on: http://localhost:3000

You can check the code styling with the following commands:
```bash
npm run lint      # run the linter
npm run lint:fix  # fix every lint error/warning it can
```


## Deploy for production

Build and start the application:
```bash
npm install
npm run build
npm start
```


## Contribute

This is a Typescript project, everything must be typed. Recurrent types must be in `/types`.

##### Pages
We use Next framework so each page must be in a file named after the url we want
to find it, in the `/pages` directory.
<br/> _example: `pages/toto.tsx` -> http://localhost:3000/toto_

##### Component
- All components must be exported by default
- Props of a component must be named: `ComponentNameProps`
- Props of a component must be exported


Global Component must be in `components/NameOfComponent/index.tsx`. If it is a specific component 
it must be in the component directory from which it is drawn.
 
 _example:_ 
 ```
- components
    - BaseInput        // used at different places in the project
        index.tsx
        - ErrorMessage // only used in BaseInput component
            index.tsx
    - InputWithLabel   // used at different places in the project
        index.tsx 
 ```

##### Storybook
Every time you add a component you must provide its story.

Stories must be in `components/NameOfComponent/NameOfComponent.stories.tsx`.  

 _example:_ 
 ```
- components
    - BaseInput
        index.tsx
        BaseInput.stories.tsx
 ```

React must be imported in your component's `index.tsx` if a story is added for said component:
```typescript
import React from 'react';
```

If you wish to add addons for your stories do so in `.storybook/addons.js`

##### Generic functions
Helper function must be placed in `/utils` directory.
