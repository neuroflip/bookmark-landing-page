# ITAcademy - Sprint1
## Level 2: Javascript and Sass

This repository contains the Level 2 implementation of the Sprint 1 for the ITAcademy FrontEnd Bootcamp.

The project is a vite project with sass dependency. Check the package.json for more info.

## Description

This repository includes the implementation of the Level 2 for the Sprint 1 in Vanilla Js and sass. 

## Branches

| LEVEL | Code | branch |
| -------- | -------- | --------  |
| Level 1 | Vanilla JS, Vanilla Css | [feature/vanilla-implementation](https://github.com/neuroflip/bookmark-landing-page/tree/feature/vanilla-implementation) |
| Level 2 | Vanilla JS, Sass | [feature/sass-implementation](https://github.com/neuroflip/bookmark-landing-page/tree/feature/sass-implementation)
| Level 3 | Vanilla JS, Tailwind | [feature/tailwind-implementation](https://github.com/neuroflip/bookmark-landing-page/tree/feature/tailwind-implementation)

The code is structured as follows:

### Project structure

1. The html resides at root directory /index.html
2. All the other code is inside the src/ directory
3. src/js for javascript files: 
    - the main.js (js entry code) prepares all the needed code for the contact form client validation, the tabs and the burguer menu functionallity.
4. src/resources/sass for the scss files: 
    - main.scss: imports all the components code into a single final css file
    - _basic.css: defines the basic styles for html common tags
    - _colors.css: defines the color variables
    - _variables.scss: defines other global variables
    - components/*.scss: code for the individual sections of the page
    - components/mixins/*.scss: mixins used at the components scss. Includes the basic code for buttons
    - All the components include code or larger and smaller screens. The file with extension *.scss is the basic code for small screens. This files are importing the code for larger screens implemented in *.l.scss. 

5. src/resources/img for the image assets from the starte-code


## Instalation and Running the project

- Clone the repository https://github.com/neuroflip/bookmark-landing-page
```
git checkout feature/sass-implementation
npm install
npm run build
npm run preview
```

Or run it in dev mode using:
`npm run dev`

Look at the package.json for more info on scripts and dependencies.

The project is live at: [https://neuroflip.github.io/vanilla-implementation](https://neuroflip.github.io/vanilla-implementation)

## Considerations

1. the HTML is using semantic tags like main, section, article, details, summary, header, footer, etc
2. the css is using flex and grid layouts for the main structure of the html content. The burguer menu is implemented using grid layout to get the links in a second row.
3. The header is fixed in position for usability
4. there is only one breakpoint in mediaquery files to distinguish between small and biger screens. Implemented in *.l.scss files inside components.
5. the contact form has some client validation to check if the format is an email. It is implememnted using a regular expression. The HTML validation is set to novalidate (at the html form tag) to avoid the standard html messages and allow a custom error to be shown.
6. The original SVG for the logo is tinted using a css filter for the smartphone burguer menu and for the footer. It is done this way to avoid to duplicate svg resources.
7. The blue background of big images is implemented using the :before pseudo element to avoid a new div container at the markup.
8. WCAG Accesibility check using [https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh). There are still some errors and warnings because: form does not have a label for the email input (there is no label at the original design) and some Very low contrast between text and background colors errors (caused by the original design too).
