// Create Two HTML file, summer.html & winter.html-
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = "." + q.pathname;     // To get the fileName to fetch the html file;
    fs.readFile(fileName, (err,data) => {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end('404 Not Found!');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

// To different result, access 2 different html files-
// localhost:8080/winter.html
// localhost:8080/summer.html
