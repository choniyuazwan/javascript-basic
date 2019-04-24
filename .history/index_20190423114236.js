var http = require('http');

http.createServer(
    function(request, response) {
        response.writeHead(
            200, {'Content-Type':'text/plain'}
        )
    }
).listen(9001);

console.log('run')