"use strict";

var fs = require('fs');

var fileLineCount = 0;

function doAnExamion(callBackFunc){
	fs.readFile('io_read_file.txt',function doneReading(err,contents){
		if(err){
			throw err;
		}else{
		var fileAry = contents.toString().split('\n');
		fileLineCount = fileAry.length - 1
		callBackFunc();
		}
	})
}


function logIt(){
	console.log(fileLineCount);
}

doAnExamion(logIt);

