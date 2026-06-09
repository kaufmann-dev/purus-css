<p align="center">
  <img src="https://puruscss.kaufmann.dev/media/logo.svg" width="120" alt="Purus CSS logo">
</p>

# Purus CSS

**Minimalist CSS Framework**

```
No JavaScript. Raw CSS.
```

15 KB minified.

## Get Started

Purus CSS is one complete plain-CSS framework with semantic element styles,
components, and utilities. It has no required package installation.

- [Source CSS](https://raw.githubusercontent.com/kaufmann-dev/purus-css/main/css/purus.css)
- [Minified CSS](https://raw.githubusercontent.com/kaufmann-dev/purus-css/main/css/purus.min.css)

Use the minified build from JSDelivr:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/kaufmann-dev/purus-css/css/purus.min.css"
/>
```

## [Website](https://puruscss.kaufmann.dev/)

- [Demo](https://puruscss.kaufmann.dev/demo)
- [Starter site](https://puruscss.kaufmann.dev/starter-site)

## Key Features

- Includes modern normalization and minimalist defaults for typography, forms,
  tables, buttons, media, and navigation
- Customizable through CSS variables
- Responsive and mobile-friendly
- Dark mode follows the system preference by default
- Utilities load last so they consistently override framework defaults
- Visible keyboard focus and reduced-motion support
- No JavaScript. Raw CSS.

## Usage

Use semantic HTML for the default styles and add utilities where needed:

```html
<main class="container">
  <h1>Purus CSS</h1>
  <p class="color-grey-text">A small, complete CSS framework.</p>
  <a class="button" href="/download">Download</a>
</main>
```

Use `.button` when a link should look like a button. Use
`aria-disabled="true"` for an unavailable button link and
`aria-current="page"` for a link representing the current page.

```html
<a class="button" href="/download">Download</a>
<a class="button" aria-disabled="true">Unavailable</a>
<a class="button" href="/docs" aria-current="page">Docs</a>
```

## Core Class Reference

- Layout: `.container`, `.container-fluid`, `.fill-vertical-space`
- Accessibility and visibility: `.visually-hidden`, `.visible`, `.invisible`
- Sizing: `.h-25`, `.h-50`, `.h-75`, `.h-100`, `.h-auto`, `.h-content`,
  `.w-25`, `.w-50`, `.w-75`, `.w-100`, `.w-auto`, `.w-content`
- Spacing: `.p`, `.px`, `.py`, `.pl`, `.pr`, `.pt`, `.pb`, `.p-lg`,
  `.px-lg`, `.py-lg`, `.pl-lg`, `.pr-lg`, `.pt-lg`, `.pb-lg`, `.p-none`,
  `.m`, `.mx`, `.my`, `.ml`, `.mr`, `.mt`, `.mb`, `.m-lg`, `.mx-lg`,
  `.my-lg`, `.ml-lg`, `.mr-lg`, `.mt-lg`, `.mb-lg`, `.m-none`, `.m-auto`
- Navigation spacing: `.p-nav`, `.p-nav-lg`
- Color: `.color-*`, `.bg-*`
- Text and alignment: `.text-center`, `.text-left`, `.text-right`,
  `.align-*`
- Decoration: `.shadow-*`, `.border*`, `.rounded-*`, `.opacity-*`
- Layout helpers: `.float-*`, `.position-*`, edge-offset utilities
- Display: `.d-none`, `.d-inline`, `.d-block`, `.d-contents`, `.d-list-item`,
  `.d-inline-block`, `.d-flow-root`, `.d-table`, `.d-flex`, `.d-inline-flex`,
  `.d-grid`, `.d-inline-grid`, `.d-inherit`, `.d-initial`, `.d-unset`

See [`css/purus.css`](css/purus.css) for every utility and variable.

## Customize with CSS Variables

Load overrides after Purus CSS:

```css
:root {
  --primary: #7253ed;
  --primary-darker: #6242d5;
  --padding: 0.5rem;
}
```

The default `--font-family` value is a system-font stack. To use a custom font,
provide the font file yourself and override the variable in CSS loaded after
Purus CSS:

```css
@font-face {
  font-family: "Example Sans";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("/fonts/example-sans.woff2") format("woff2");
}

:root {
  --font-family: "Example Sans", system-ui, sans-serif;
}
```

Purus CSS does not bundle fonts or make runtime font requests.

## Dark Mode

Purus CSS follows the user's system color scheme by default. Set `data-theme`
on the root element to explicitly select light or dark mode:

```html
<html data-theme="dark"></html>
```

Remove the attribute to return to the system preference. Applications can
override the light and dark color variables to customize either theme.
