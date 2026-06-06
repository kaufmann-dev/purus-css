import { readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const targets = JSON.parse(await readFile("size-limit.json", "utf8"));
let failed = false;

for (const [file, limits] of Object.entries(targets)) {
  const contents = await readFile(file);
  const gzipBytes = gzipSync(contents).byteLength;
  console.log(`${file}: ${contents.byteLength} bytes, ${gzipBytes} bytes gzip`);
  if (
    contents.byteLength > limits.maxBytes ||
    gzipBytes > limits.maxGzipBytes
  ) {
    failed = true;
    console.error(`Size budget exceeded: ${JSON.stringify(limits)}`);
  }
}

process.exitCode = failed ? 1 : 0;
