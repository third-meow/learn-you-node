http = require('http')

var server1_done = false;
var server2_done = false;
var server3_done = false;

var server1_content = "";
var server2_content = "";
var server3_content = "";

//get from server 1
http.get(process.argv[2], function callback(response){
	response.setEncoding('utf8');
	//get data, add it to content
	response.on("data", function callback(data){
		server1_content += data;
	});
	//set done flag to true
	response.on("end", function callback(){
		server1_done = true;
		if(server2_done && server3_done){
			printAll();
		}
	});
});

//get from server 2
http.get(process.argv[3], function callback(response){
	response.setEncoding('utf8');
	//get data, add it to content
	response.on("data", function data(data){
		server2_content += data;
	});
	//set done flag to true
	response.on("end", function end(){
		server2_done = true;
		if(server1_done && server3_done){
			printAll();
		}
	});
});

//get from server 3
http.get(process.argv[4], function callback(response){
	response.setEncoding('utf8');
	//get data, add it to content
	response.on("data", function data(data){
		server3_content += data;
	});
	//set done flag to true
	response.on("end", function end(){
		server3_done = true;
		if(server2_done && server3_done){
			printAll();
		}
	});
});

//print results in order
function printAll(){
	console.log(server1_content);
	console.log(server2_content);
	console.log(server3_content);
}

