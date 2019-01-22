let	fs = require('fs');

let filee = fs.readFileSync(process.argv[2]);
let fileeStr = filee.toString();
let nlCount = fileeStr.split(/r?\n/).length - 1
console.log(nlCount);

