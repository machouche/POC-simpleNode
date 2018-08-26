const http = require("http");
const _ = require("lodash");

// const hostname = "127.0.0.1";
const hostname = "192.168.1.39";
const port = 3000;

const server = http.createServer((req, res) => {
  const person = {
    age: 31,
    name: "Maxime"
  };

  if (_.isNil(person)) {
    console.log("coucou");
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello super World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
