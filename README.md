# Frontend Mentor - Space tourism website solution

## How to run
- clone the repo
- `cd space-tourism-FEMC/`
- `npm i`
- `npm run dev`

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./public/screenshot.jpg)

### Links

- Solution URL: [Github repo](https://github.com/MikeyOnyedika/space-tourism-FEMC)
- Live Site URL: [space-tourism-femc.vercel.app/](https://space-tourism-femc.vercel.app/)

## My process

### Built with

- Tailwindcss
- [Next.js](https://nextjs.org/)
- CSS flexbox
- Mobile-first workflow

### What I learned
#### I learnt how to pad a paragraph of text in CSS
Suppose I want the text in each paragraph to be 4 lines, regardless of whether the paragraph elements contain enough text, such as in the second paragraph
```html
<body>
  <div id="app"></div>
  <p class="padded">Lorem ipsum, the most famous placeholder text in the world of programming. This text is the work of
    a million minds
    stretched out over the centuries.</p>
  <p class="padded">Lorem ipsum, the most famous placeholder text in the world of programming.</p>
  <script type="module" src="/main.js"></script>
</body>
```

The solution is to calculate a min-height for the paragraph element using the line-height, where
`min-height` = `line-height` * number of lines to pad to

Since we want 4 lines, we can take a line-height of 1.5 and do;
`min-height` = 1.5 * 4 =  6em.

Note that the `min-height` unit is in `em`

```css
.padded {
  color: black;
  padding: 0.2rem;
  border: 1px solid #AAA;
  width: 100%;
  max-width: 20rem;


  /*pad to 4 lines*/
  line-height: 1.5;
  /* 6 * 1.5 = 4 */
  min-height: 6em;
  overflow: hidden;
}
```

#### I learnt that the fallback image element inside a `<picture>` element must be placed directly inside the `<picture>` element, else, the `<source>` element media queries will not work.

This is also the case even when using Nextjs Image component because it's just a wrapper around the native `<img />` element.

THIS DOES NOT WORK!!
```html
<picture>
	<source srcSet={tech.image3} media="(min-width: 1440px)" />
	<source srcSet={tech.image2} media="(min-width: 768px)" />
	<div className="...">
		<Image        /* Dont wrap image inside anything */
			src={tech.image1} 
			width={2000} 
			height={2000} 
			alt="" 
			className="..." 
		/>
	</div>
</picture>
```


BUT THIS WORKS
```html
<div className="...">    /* Instead, wrap the entire picture element */
	<picture>
		<source srcSet={tech.image3} media="(min-width: 1440px)" />
		<source srcSet={tech.image2} media="(min-width: 768px)" />
		<Image  /* place the image element directly within the picture element */
			src={tech.image1} 
			width={2000} 
			height={2000} 
			alt="" 
			className="..." 
		/>
	</picture>
</div>
```


## Author

- Frontend Mentor - [@MikeyOnyedika](https://www.frontendmentor.io/profile/MikeyOnyedika)
