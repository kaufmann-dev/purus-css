import { readFile } from "node:fs/promises";

const css = await readFile("dist/purus.css", "utf8");
const obsolete = css.match(/-(?:webkit|moz|ms|o)-/g);
if (obsolete) {
  throw new Error(
    `Generated CSS contains obsolete vendor prefixes: ${[...new Set(obsolete)].join(", ")}`,
  );
}
console.log("Generated CSS contains no obsolete vendor prefixes.");
