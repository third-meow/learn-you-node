let fs = require('fs');

function filter(dir, etxn, callback){
	fs.readdir(dir, (err, contents) => {
		if (err){
			callback(err, []);
		}else{
			let sortedList = [];
			contents.forEach((e) => {
				let file = (e.split('.'));
				if (file[1] == etxn){
					sortedList.push(e);
				}
			});
			callback(err, sortedList);
		}
	});
	
}

module.exports = filter;
