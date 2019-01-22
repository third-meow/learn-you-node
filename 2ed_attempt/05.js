const fs = require('fs');

const path = process.argv[2];
const postfix = '.' + process.argv[3];

fs.readdir(path, (err, contents) => {
	contents.forEach((str, idx) => {
		if (str.includes(postfix)) {
			console.log(str);
		}
	});
});
