let fs = require('fs');

function sortIt(sortWhat){
	let sortedList = [];
	for(let i = 0; i < sortWhat.length; i++){
		etxn = (sortWhat[i].split('.'))[1];
		if(etxn == process.argv[3]){
			sortedList.push(sortWhat[i])
		}
	}
	logIt(sortedList);
}

function logIt(logWhat){
	for(let i = 0; i < logWhat.length; i++){
		console.log(logWhat[i]);
	}
}

fs.readdir(process.argv[2], (err, contents) => {
	sortIt(contents);
});
