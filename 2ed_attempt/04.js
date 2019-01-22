const fs = require('fs');

const path = process.argv[2];

fs.readFile(path, (err, data) => {
	if (err == null) {
		const lines = data.toString().split('\n').length - 1;
		console.log(lines);
	}
});
