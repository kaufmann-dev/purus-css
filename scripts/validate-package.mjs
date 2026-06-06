import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile("package.json", "utf8"));
if (pkg.version !== "1.0.0" || pkg.style !== "./dist/purus.css") {
  throw new Error("Package version or style entry is invalid.");
}
if (!pkg.publishConfig?.provenance || !pkg.exports?.["./purus.min.css"]) {
  throw new Error("Package provenance or exports are invalid.");
}

const pack = JSON.parse(
  execFileSync("npm", ["pack", "--dry-run", "--json"], { encoding: "utf8" }),
)[0];
const allowed =
  /^(CHANGELOG\.md|LICENSE|README\.md|package\.json|dist\/purus(\.min)?\.css)$/;
const unexpected = pack.files
  .map(({ path }) => path)
  .filter((path) => !allowed.test(path));
if (unexpected.length)
  throw new Error(`Unexpected published files: ${unexpected.join(", ")}`);
console.log(`Package valid: ${pack.files.length} files`);
