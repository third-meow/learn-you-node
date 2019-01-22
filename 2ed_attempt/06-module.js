const fs = require('fs');

function filterLs(path, postfix, callback) {
	postfix = '.' + postfix;
	filteredData = [];

	fs.readdir(path, (err, contents) => {
		if (err) return callback(err);
		contents.forEach((str, idx) => {
			if (str.includes(postfix)) {
				filteredData.push(str);
			}
		});
		callback(null, filteredData);
	});
}

module.exports = filterLs;
