import browserslist from "browserslist";
import { browserslistToTargets, bundle } from "lightningcss";
import { writeFile } from "node:fs/promises";

const targets = browserslistToTargets(browserslist());

for (const [file, minify] of [
  ["dist/purus.css", false],
  ["dist/purus.min.css", true],
]) {
  const result = bundle({ filename: "src/purus.css", minify, targets });
  await writeFile(file, result.code);
}
