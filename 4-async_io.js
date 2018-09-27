"use strict";

let fs = require('fs');

let fileLineCount = 0;

function doAnExamion(callBackFunc){
	fs.readFile(process.argv[2], (err, contents) => {
		if(err){
			throw err;
		}else{
			let fileAry = contents.toString().split('\n');
			fileLineCount = fileAry.length - 1
			callBackFunc(fileLineCount);
		}
	})
}

doAnExamion((lc) => {
	console.log(lc);
});

