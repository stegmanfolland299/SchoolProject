const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  let response = '';

  if (pathname === '/') {
    response = `
      <h1>Welcome to Node.js</h1>
      <p>This is a sample website created with Node.js</p>
    `;
  } else {
    res.statusCode = 404;
    response = `<h1>404 Not Found</h1>`;
  }

  res.setHeader('Content-Type', 'text/html');
  res.end(response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
