var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function (req, res){
	
	//get url data
	var url_data = url.parse(req.url, true);
	//get in date in ISO format
	var iso_date = new Date(url_data['query']['iso'])

	//if url indicates iso-hour,min,sec  conversion
	if(url_data['pathname'] === '/api/parsetime'){
		//send content type
		res.writeHead(200, { 'Content-Type': 'application/json' })	
		
		//create date in dictionary/json format with hours, minutes and seconds
		var json_date = {
			'hour' : iso_date.getHours(),
			'minute' : iso_date.getMinutes(),
			'second' : iso_date.getSeconds() 
		}
		
		//stringify
		json_date = JSON.stringify(json_date);

		//send json string
		res.end(json_date);
	}
	//if url indicates iso-unixtime conversion 
	else if (url_data['pathname'] === '/api/unixtime'){
		//send content type
		res.writeHead(200, { 'Content-Type': 'application/json' })	

		//convert iso time to unixtime json
		var json_date = {
			'unixtime' : iso_date.getTime()
		}
	
		//stringify
		json_date = JSON.stringify(json_date);

		//send unixtime
		res.end(json_date);
	}else{
		//send 404
		res.writeHead(404);
		console.warn('Invaild Url Given, 404 given');
	}
});

server.listen(process.argv[2]);

