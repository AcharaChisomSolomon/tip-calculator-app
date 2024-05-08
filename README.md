# Frontend Mentor - Tip Calculator App Solution

This is a solution to the [Tip Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./design/desktop-design-completed.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/AcharaChisomSolomon/tip-calculator-app)
- Live Site URL: [Live Site](https://acharachisomsolomon.github.io/tip-calculator-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learned how to apply DRY (Don't Repeat Yourself) principles in JavaScript, and I am proud of the following code snippet:

```javascript
const inputChecker = el => {
    el.addEventListener('input', function() {
        const twoDecimalPlaces = /^\d*\.?\d{0,2}$/;

        if (!twoDecimalPlaces.test(this.value)) {
            this.value = this.value.length > 1 ? this.value.slice(0, this.value.length - 1) : '';
        }
    });
}

inputChecker(billInput)
inputChecker(peopleInput)
inputChecker(tipInput)
```

This function, `inputChecker`, adds an `input` event listener to any element passed to it. This way, I can easily add the same functionality to multiple elements without repeating the same code.

### Continued development

I plan to continue working on more projects to improve my skills. I aim to further enhance my understanding of JavaScript, especially in handling user interactions and manipulating the DOM. I also plan to delve deeper into responsive design to ensure my future projects provide an optimal user experience across all device sizes.

### Useful resources

- [Frontend Masters](https://frontendmasters.com) - This platform helped me understand more about web development. Their courses are comprehensive and taught by industry professionals.
- [Frontend Mentor](https://www.frontendmentor.io) - This platform provided me with practical projects to work on. Their challenges range from beginner to advanced and cover a wide array of web development topics.

## Author

- Frontend Mentor - [@AcharaChisomSolomon](https://www.frontendmentor.io/profile/AcharaChisomSolomon)
- Twitter - [@Chisom14Solomon](https://www.twitter.com/Chisom14Solomon)

## Acknowledgments

I would like to thank Frontend Mentor for their learning paths and Frontend Masters for their wonderful courses. Their resources have been instrumental in my web development journey.