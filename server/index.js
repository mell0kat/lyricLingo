var http = require('http');
var server = http.createServer();


server.listen(8000, function(){
 	console.log('Server listening on port 8000!');
 });

server.on('request', require('./app'))
