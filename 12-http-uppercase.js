http = require('http');
fs = require('fs');

var server = http.createServer(function (req, res){
	//incoming data from req stream
	var content = '';
	//set req streams encoding to utf8 (string format)
	req.setEncoding('utf8');
	
	//upon incoming data, add it to content
	req.on('data', function(d){
		content += d;
	});
	
	//upon end of data, uppercase it and send it back
	req.on('end', function(){
		//capitalize content received
		caps_content = content.toUpperCase();
		//write capitalized content to res
		res.end(caps_content);
		//clear content
		content = '';
	});
});

server.listen(process.argv[2]);

