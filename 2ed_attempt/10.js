const net = require('net');

var port = process.argv[2];

function fitLen(num, len) {
	var str = String(num)
	while(str.length < len) {
		str = '0' + str;
	}
	return str;
}

function getDateStr() {
	var date = new Date();
	var dateStr = "";
	//add year
	dateStr += fitLen(date.getFullYear(), 4);
	//add dash
	dateStr += "-";
	//add month
	dateStr += fitLen(date.getMonth() + 1, 2);
	//add dash
	dateStr += "-";
	//add day
	dateStr += fitLen(date.getDate(), 2);
	//add space
	dateStr += " ";
	//add hour
	dateStr += fitLen(date.getHours(), 2);
	//add colon
	dateStr += ":";
	//add minute
	dateStr += fitLen(date.getMinutes(), 2);
	//add newline
	dateStr += "\n";

	return dateStr;
}

net.createServer((socket) => {
	socket.end(getDateStr());
}).listen(port);

