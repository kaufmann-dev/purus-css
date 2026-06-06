# Contributing

Use Node.js 24 and npm. Install with `npm ci`, then run `npm run ci` before opening a pull request.

## Development

Edit modular source files in `src/`; never edit generated files in `dist/` by hand. Use `npm run dev` while working and `npm run build` before validation.

## Public API Review

New classes are exceptional. A proposal must justify a broadly reusable layout or component, and include API validation updates, documentation, copy-paste examples, and tests. Modifier classes, utilities, responsive variants, and undocumented classes are not accepted.

Token changes require a semantic use case, light and dark theme review, and updated token documentation. Avoid product-specific or presentational token names.

## Accessibility And Testing

Use correct semantic HTML and verify keyboard focus, representative Axe scans, light and dark themes, and mobile and desktop widths. Run `npm run lint`, `npm run validate:api`, and `npm test`.

## Size Budget

Run `npm run size`. CI fails above the documented targets in `size-limit.json`. An intentional increase must update the targets and README in the same pull request.

## Release

Update `CHANGELOG.md`, set the package version, and create a matching `vX.Y.Z` tag. The release workflow verifies tag/version equality, builds, validates, creates artifacts, and publishes to npm with trusted publishing and provenance.
