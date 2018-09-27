
filt = require('./6-make_modular_mod')

filt(process.argv[2], process.argv[3], (err, data) => {
	if(err){
		throw err;
	}else{
		data.forEach((e) => {
			console.log(e);
		});
	}
});

