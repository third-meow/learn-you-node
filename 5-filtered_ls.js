var fs = require('fs');

function sortIt(sortWhat){
	var sortedList = [];
	for(var i = 0; i < sortWhat.length; i++){
		etxn = (sortWhat[i].split('.'))[1];
		if(etxn == process.argv[3]){
			sortedList.push(sortWhat[i])
		}
	}
	logIt(sortedList);
}

function logIt(logWhat){
	for(i = 0;i < logWhat.length;i++){
		console.log(logWhat[i]);
	}
}

fs.readdir(process.argv[2], function callback(err, contents){
	sortIt(contents);
});
