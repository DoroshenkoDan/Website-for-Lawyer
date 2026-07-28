import { createServer } from "node:http";
import { chmodSync, existsSync, unlinkSync } from "node:fs";
import next from "next";

const target = process.env.PORT ?? "3000";
const asPort = Number(target);
const isSocket = !Number.isInteger(asPort) || asPort <= 0;

const app = next({ dev: false });
const handle = app.getRequestHandler();

await app.prepare();

const server = createServer((req, res) => {
  handle(req, res);
});

function shutdown() {
  server.close(() => {
    if (isSocket && existsSync(target)) unlinkSync(target);
    process.exit(0);
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

if (isSocket) {
  if (existsSync(target)) unlinkSync(target);
  server.listen(target, () => {
    chmodSync(target, 0o666);
    console.log(`ready on socket ${target}`);
  });
} else {
  server.listen(asPort, () => {
    console.log(`ready on port ${asPort}`);
  });
}
