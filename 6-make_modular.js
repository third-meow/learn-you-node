
filt = require('./make_modular_mod')

function func(err, data){
	if(err){
		throw err;
	}else{
		for(var i = 0; i < data.length; i++){
			console.log(data[i]);
		}
	}
}

filt(process.argv[2], process.argv[3], func)
