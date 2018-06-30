"use_strict";
var fs = require('fs');
var rawList = [];
var sortedList = [];

var dotJs = [];
var dotTxt = [];
var dotOther = [];

function sortIt(sortWhat){
	for(i = 0;i < sortWhat.length;i++){
		var splitFile = sortWhat[i].split('.');
		var thisExten = splitFile[1];

		if(thisExten == "js"){
			dotJs.push(sortWhat[i]); //add to dotJs
		}else if(thisExten == "txt"){
			dotTxt.push(sortWhat[i]); //add to dotTxt
		}else{
			dotOther.push(sortWhat[i]); //add to dotOther
		}
	}

	for(i = 0;i < dotJs.length;i++){
		sortedList.push(dotJs[i]);
	}
	sortedList.push("---------------------\n");
	for(i = 0;i < dotTxt.length;i++){
		sortedList.push(dotTxt[i]);
	}
	sortedList.push("---------------------\n");
	for(i = 0;i < dotOther.length;i++){
		sortedList.push(doOther[i]);
	}
	sortedList.push("---------------------\n");
	logIt(sortedList);
}
function logIt(logWhat){
	for(i = 0;i < logWhat.length;i++){
		console.log(logWhat[i]);
	}
}
fs.readdir('/home/jds/src/my_js/node/learnyounode_exercises',function callback(err,contents){
	sortIt(contents);
})


