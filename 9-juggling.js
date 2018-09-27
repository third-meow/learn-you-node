http = require('http')

let server1_done = false;
let server2_done = false;
let server3_done = false;

let server1_content = "";
let server2_content = "";
let server3_content = "";

//get from server 1
http.get(process.argv[2], (response) => {
	response.setEncoding('utf8');
	//get data, add it to content
	response.on("data", (data) => {
		server1_content += data;
	});
	//set done flag to true
	response.on("end", () => {
		server1_done = true;
		if(server2_done && server3_done){
			printAll();
		}
	});
});

//get from server 2
http.get(process.argv[3], (response) => {
	response.setEncoding('utf8');
	//get data, add it to content
	response.on("data", (data) => {
		server2_content += data;
	});
	//set done flag to true
	response.on("end", () => {
		server2_done = true;
		if(server1_done && server3_done){
			printAll();
		}
	});
});

//get from server 3
http.get(process.argv[4], (response) => {
	response.setEncoding('utf8');
	//get data, add it to content
	response.on("data", (data) => {
		server3_content += data;
	});
	//set done flag to true
	response.on("end", () => {
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

