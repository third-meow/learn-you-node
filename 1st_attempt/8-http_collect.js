http = require('http')

let stop = false;

http.get(process.argv[2], (response) => {
	content = "";
	response.setEncoding('utf8');

	//get data, add it to content
	response.on("data", (data) => {
		content += data;
	});

	response.on("end", () => {
		console.log(content.length);
		console.log(content);
	});
});
