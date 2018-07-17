http = require('http');


var server = http.createSever(function (req, res){

	req.on('connection', function(){
		res.write('workiong on it');
	});
	


});


server.listen(precess.argv[2]);
