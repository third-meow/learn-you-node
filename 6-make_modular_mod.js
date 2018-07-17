var fs = require('fs');

function filter(dir, etxn, callback){
	fs.readdir(dir, function sort(err, contents){
		if (err){
			callback(err, []);
		}else{
			var sortedList = [];
			for(var i = 0; i < contents.length; i++){
				var file = (contents[i].split('.'));
				if (file[1] == etxn){
					sortedList.push(contents[i]);
				}
			}
			callback(err, sortedList);
		}
	});
	
}

module.exports = filter;
