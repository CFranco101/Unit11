var http = require("http");

http.createServer(function (request, response){
    response.writeHead(200,{'Content-type': 'text/html'});
    response.write('Hello World,my name is Christian Franco');
}).listen(8001);