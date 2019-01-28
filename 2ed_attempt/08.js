const hyperquest = require('hyperquest');
const bl = require('bl');

var url = process.argv[2];

hyperquest(url).pipe(bl((err, data) => { 
	console.log(data.toString().length);
	console.log(data.toString());
}));
