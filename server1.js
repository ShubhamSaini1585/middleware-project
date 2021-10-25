var http = require('http');

http.createServer(function (req, res) {
    res.write('Hello from server 1');   
    res.end();
}).listen(5001);
console.log('Server running at 5001'); 
