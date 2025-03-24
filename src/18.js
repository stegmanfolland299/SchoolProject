// Example of creating a simple server using Node.js
const http = require('http');

const hostname = '127.0.0.1'; // Change this to your desired host address
const port = 3000; // Change this to your desired port number

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Hello, world! This is a simple Node.js server.`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
