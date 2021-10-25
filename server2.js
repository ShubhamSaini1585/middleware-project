var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello from server 2');
    res.end();
}).listen(5002);

console.log('Server running at 5002');
