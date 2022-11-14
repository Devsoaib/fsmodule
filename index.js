const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('home.html', function(error, data){
            res.writeHead(200 , {"content-type": "text/html"})
            res.write(data)
            res.end();
        })
    }
});

server.listen(6060);
console.log("Success");