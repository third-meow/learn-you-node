
let tally = 0;

for(let i = 2; i < process.argv.length; i++){
	tally += Number(process.argv[i]);
}

console.log(tally);
