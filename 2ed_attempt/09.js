const hyperquest = require('hyperquest');
const bl = require('bl');

var urls = process.argv.slice(2,5) ;

hyperquest(urls[0]).pipe(bl((err, data) => { 
	console.log(data.toString());
	hyperquest(urls[1]).pipe(bl((err, data) => { 
		console.log(data.toString());
			hyperquest(urls[2]).pipe(bl((err, data) => { 
				console.log(data.toString());
			}));
		}));
}));
	
