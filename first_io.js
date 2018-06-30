fs = require('fs');

var filee = fs.readFileSync('io_read_file.txt');
var fileeStr = filee.toString();
console.log(fileeStr);

