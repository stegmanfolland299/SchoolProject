var http = require('http');

http.createServer(function(req, res) {
  var url = req.url;
  console.log('Received request for ' + url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('You have reached the URL: ' + url);
}).listen(8080);
console.log('Server running at http://localhost:8080/');
