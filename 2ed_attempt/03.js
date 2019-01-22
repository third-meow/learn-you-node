const fs = require('fs');

const path = process.argv[2];
var content = fs.readFileSync(path).toString();
content = content.split('\n');
console.log(content.length - 1);
