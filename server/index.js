const express = require("express");
const serveStatic = require("serve-static");
const http = require("http");
const path = require("path");

const app = express();
app.use(express.json());

app.use(serveStatic(path.join(__dirname, "../")));

const server = http.createServer(app);
server.listen(process.env.PORT || 3333, () => {
  console.log("Connected at port 3333 for development...");
});
