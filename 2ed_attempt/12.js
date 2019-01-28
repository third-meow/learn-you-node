const http = require('http');

var port = process.argv[2];

http.createServer((req, res) => {
	req.on('data', (data) => {
		console.log(data.toString().toUpperCase());
		res.write(data.toString().toUpperCase());
	});

	req.on('end', (data) => {
		res.end();
	});
}).listen(port);
