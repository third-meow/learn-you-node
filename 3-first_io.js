fs = require('fs');

var filee = fs.readFileSync(process.argv[2]);
var fileeStr = filee.toString();
var nlCount = fileeStr.split(/r?\n/).length - 1
console.log(nlCount);

