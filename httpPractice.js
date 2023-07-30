// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

/*
Node.js as a Web Server-
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

Use the createServer() method to create an HTTP server:
// Creating a Server object-
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!);
}).listen(8080);   //the server object listens on port 8080

* The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
*/

/*
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
res.writeHead(200, {'Content-Type': 'text/html'});
*/

// Inbuilt Module-


/*
The function passed into the http.createServer() has a 'req' argument that represents the request from the client, as an object (http.IncomingMessage object).

This object has a property called "url" which holds the part of the url that comes after the domain name:
*/
/*
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write("Hello!");
  res.end();
}).listen(8080);
*/