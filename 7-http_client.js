http = require('http')


http.get(process.argv[2], function callback(response){
	response.setEncoding('utf8');
	response.on("data", function out(data){
		console.log(data);
	});
});
