import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const types = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
};

createServer((request, response) => {
  const requested = request.url === "/" ? "/index.html" : request.url;
  const root = requested.startsWith("/dist/") ? "." : "site";
  const path = normalize(join(root, requested));
  if (!existsSync(path)) {
    response.writeHead(404).end();
    return;
  }
  response.setHeader("Content-Type", types[extname(path)] ?? "text/plain");
  createReadStream(path).pipe(response);
}).listen(4173, "127.0.0.1");
