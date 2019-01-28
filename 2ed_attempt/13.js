const http = require('http');
const url = require('url');

var port = process.argv[2];

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' })

	var time = new Date(url.parse(req.url, true).query.iso);
	if (url.parse(req.url, true).pathname == '/api/parsetime') {
		res.end(JSON.stringify({
				'hour': time.getHours(),
				'minute': time.getMinutes(),
				'second': time.getSeconds()
			}));
	} else if (url.parse(req.url, true).pathname == '/api/unixtime') {
		res.end(JSON.stringify({
			'unixtime': time.getTime()
		}));
	}

}).listen(port);
