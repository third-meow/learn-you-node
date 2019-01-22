const filterLs = require('./06-module');

const path = process.argv[2];
const postfix = process.argv[3];

filterLs(path, postfix, (err, data) => {
	if (err !== null) {
		console.log(err);
	}
	data.forEach((str, idx) => {
		console.log(str);
	});
});
