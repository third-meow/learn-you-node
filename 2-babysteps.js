
var tally = 0;

for(var i = 2; i < process.argv.length; i++){
	tally += Number(process.argv[i]);
}

console.log(tally);
