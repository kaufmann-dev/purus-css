import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const allowed = new Set([
  "badge",
  "button",
  "callout",
  "card",
  "cluster",
  "container",
  "grid",
  "prose",
  "sidebar",
  "stack",
  "visually-hidden",
]);
const found = new Set();

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    files.push(...(entry.isDirectory() ? await walk(path) : [path]));
  }
  return files;
}

for (const file of await walk("src")) {
  const css = await readFile(file, "utf8");
  const selectors = css.replace(
    /\/\*[\s\S]*?\*\/|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'/g,
    "",
  );
  for (const match of selectors.matchAll(/\.([a-z][\w-]*)/g))
    found.add(match[1]);
}

for (const file of await walk("site")) {
  if (extname(file) !== ".html") continue;
  const html = await readFile(file, "utf8");
  for (const attribute of html.matchAll(/\bclass="([^"]+)"/g)) {
    for (const name of attribute[1].split(/\s+/)) found.add(name);
  }
}

const unsupported = [...found].filter((name) => !allowed.has(name)).sort();
if (unsupported.length) {
  throw new Error(`Unsupported public classes: ${unsupported.join(", ")}`);
}
console.log(`Public API valid: ${[...allowed].sort().join(", ")}`);
