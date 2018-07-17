http = require('http')

var stop = false;

http.get(process.argv[2], function callback(response){
	content = "";
	response.setEncoding('utf8');

	//get data, add it to content
	response.on("data", function out(data){
		content += data;
	});

	response.on("end", function print(){
		console.log(content.length);
		console.log(content);
	});
});
