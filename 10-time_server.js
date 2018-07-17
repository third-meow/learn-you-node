net = require('net');

function Zfill(input){
	if(input < 10) {
		input = '0' + input;
	}
	return input;
}
function dateTimeStr(){
	now = new Date();
	//start with blank string
	date_str = ''

	//add year 
	date_str += now.getFullYear();
	date_str += '-';

	//add month
	date_str += Zfill((now.getMonth() + 1));
	date_str += '-';

	//add day
	date_str += Zfill(now.getDate());
	date_str += ' ';

	//add hour
	date_str += Zfill(now.getHours());
	date_str += ':';

	//add minute
	date_str += Zfill(now.getMinutes());

	//add newline
	date_str += '\n';

	//return completed date string
	return date_str;
}


var server = net.createServer(function (socket) {
	socket.end(dateTimeStr());	
});

server.listen(process.argv[2]);
