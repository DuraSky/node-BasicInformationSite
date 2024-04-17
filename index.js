const { error } = require("console");
const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/" || req.url === "/home") {
      fs.readFile(__dirname + "/index.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "text-plain" });
          res.end("internal server error");
        } else {
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data);
        }
      });
    } else if (req.url === "/about") {
      fs.readFile(__dirname + "/about.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "text-plain" });
          res.end("internal server error");
        } else {
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data);
        }
      });
    } else if (req.url === "/contacts") {
      fs.readFile(__dirname + "/contactMe.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "text-plain" });
          res.end("internal server error");
        } else {
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data);
        }
      });
    } else {
      fs.readFile(__dirname + "/404.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-type": "text-plain" });
          res.end("internal server error");
        } else {
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data);
        }
      });
    }
  })
  .listen(8080, "127.0.0.1");
