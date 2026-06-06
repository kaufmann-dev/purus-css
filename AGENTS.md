# Purus CSS Agent Instructions

## Architecture

- Author modular CSS in `src/`; `src/purus.css` defines the ordered layers and imports.
- Build output consists only of `dist/purus.css` and `dist/purus.min.css`.
- The semantic static documentation site lives in `site/` and uses Purus CSS itself.
- Consumer CSS contains no JavaScript. `site/assets/site.js` is progressive enhancement only.

## Commands

- `npm run build`: clean and reproducibly build both distribution files.
- `npm run dev`: watch the unminified build.
- `npm run format:check`: verify formatting.
- `npm run lint`: lint CSS, JavaScript, and HTML.
- `npm run validate:api`: reject undocumented classes.
- `npm run validate:dist`: reject obsolete prefixes in generated CSS.
- `npm run validate:package`: verify publish metadata and file contents.
- `npm run size`: enforce `size-limit.json`.
- `npm test`: run Playwright and Axe smoke tests.
- `npm run ci`: run every required check.

## Public API

The only approved classes are `.container`, `.prose`, `.stack`, `.cluster`, `.grid`, `.sidebar`, `.card`, `.button`, `.badge`, `.callout`, and `.visually-hidden`.

Do not invent classes, modifiers, responsive variants, utilities, aliases, or undocumented selectors. A new public class requires explicit API review, documentation, an example, tests, and a strong reusable-layout or component justification.

Documented custom properties and the `data-theme="light"` and `data-theme="dark"` attributes are supported API. Token changes require the same deliberate review as class changes.

## Constraints

- Keep ordered layers: `reset`, `tokens`, `base`, `components`, `layouts`.
- Prefer semantic HTML, `:where()`, logical properties, and intrinsic layouts.
- Do not add obsolete prefixes, compatibility fallbacks, generated CSS copies, or consumer JavaScript.
- Keep minified and gzip output inside `size-limit.json`; update its documented targets in the same change when an intentional increase is approved.

## Documentation Sync

After changes, update existing root documentation when affected: `README.md` for setup/public API/usage, `DESIGN.md` for visual decisions, and `AGENTS.md` for commands/tooling/conventions. Keep site guides, examples, `llms.txt`, and `CONTRIBUTING.md` aligned with supported API.
