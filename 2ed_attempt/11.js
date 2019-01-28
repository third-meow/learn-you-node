const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var path = process.argv[3];

http.createServer((req, res) => {
	fs.createReadStream(path).pipe(res);
}).listen(port);


