var http = require('http');
var url = require('url');

http.createServer(
    function(request, response) {
        console.log(request.method);
        let queryParams = url.parse(request.url, true).query;
        console.log(queryParams);
        response.writeHead(
            200, {'Content-Type':'text/plain'}
        );
        response.end(`Hello ${queryParams.nama}`);
    }
).listen(9001);

console.log('run')