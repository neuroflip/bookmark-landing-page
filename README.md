# ITAcademy - Sprint1
## Level 1: Javascript and css (Vanilla)

This repository contains the Level 1 implementation of the Sprint 1 for the ITAcademy FrontEnd Bootcamp.

The project is a vite project with no other dependency.

## Description

This repository includes the implementation of the Level 1 for the Sprint 1 in Vanilla Js and css. The code is structured as follows:

### Project structure

1. The html resides at root directory /index.html
2. All the other code is inside the src/ directory
3. src/js for javascript files: 
    - the main.js (js entry code) prepares all the needed code for the contact form client validation, the tabs and the burguer menu functionallity.
4. src/resources/css for the css files: 
    - basic.css: defines the basic styles for html common tags
    - colors.css: defines the color variables
    - all the sections in the page includes is own css files: one for the small screens and the mediaqueries css file for larger screens
5. src/resources/img for the image assets from the starte-code


## Instalation and Running the project

- Clone the repository https://github.com/neuroflip/bookmark-landing-page
`npm install`
`npm run build`
`npm run preview`

Or run it in dev mode using:
`npm run dev`

Look at the package.json for more info on scripts and dependencies.

The project is live at: [https://neuroflip.github.io/vanilla-implementation](https://neuroflip.github.io/vanilla-implementation)

## Considerations

1. the HTML is using semantic tags like main, section, article, details, summary, header, footer, etc
2. the css is using flex and grid layouts for the main structure of the html content. The burguer menu is implemented using grid layout to get the links in a second row.
3. The header is fixed in position for usability
4. there is only one breakpoint in mediaquery files to distinguish between small and biger screens
5. the contact form has some client validation to check if the format is an email. This is just checking if the input text contains the '@' character, but it can be more complicated using a regular expression or other techniques. The HTML validation is set to novalidate (at the html form tag) to avoid the standard html messages and allow a custom error to be shown.
6. The original SVG for the logo is tinted using a css filter for the smartphone burguer menu and for the footer. It is done this way to avoid to duplicate svg resources.
7. The blue background of big images is implemented using the :before pseudo element to avoid a new div container at the markup.
