var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello from server 3');
    res.end();
}).listen(5003);

console.log('Server running at 5000');
