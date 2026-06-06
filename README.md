# Purus CSS

Purus CSS is a class-light, HTML-first CSS foundation. It gives semantic HTML polished, responsive, accessible defaults and exposes only eleven reusable classes.

## Install

```sh
npm install purus-css@1.0.0
```

```css
@import "purus-css";
```

Or use a version-pinned CDN URL:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/purus-css@1.0.0/dist/purus.min.css"
/>
```

## Philosophy

Write semantic HTML first. Add a class only when content needs a reusable layout or component. Purus CSS contains no consumer JavaScript, utility classes, modifiers, or responsive variants.

## Quick Start

```html
<main class="container stack">
  <article class="prose">
    <h1>A clear document</h1>
    <p>Native elements are styled without classes.</p>
  </article>
</main>
```

## Public API

The complete class API is `.container`, `.prose`, `.stack`, `.cluster`, `.grid`, `.sidebar`, `.card`, `.button`, `.badge`, `.callout`, and `.visually-hidden`.

Documented semantic custom properties in [`src/tokens.css`](src/tokens.css) are also public. New classes or tokens require explicit API review, documentation, examples, and tests.

## Theming

The default theme follows the system through `color-scheme`. Set `data-theme="light"` or `data-theme="dark"` on the root element to override it.

## Browser Support

Purus CSS targets Browserslist `baseline widely available`. Obsolete browsers, vendor prefixes, and legacy compatibility rules are unsupported.

## Reset Notice

Version `1.0.0` is a ground-up reset. Pre-release selectors and files are not supported public API and no migration layer is provided.

## Size

CI enforces the machine-readable budgets in [`size-limit.json`](size-limit.json): 16 KB minified and 5 KB gzip. A deliberate increase must update those documented targets in the same change.

Documentation and examples are available at [puruscss.kaufmann.dev](https://puruscss.kaufmann.dev/).
