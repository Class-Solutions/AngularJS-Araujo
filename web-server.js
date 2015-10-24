var express = require('express');
var app = express();
var staticPath = express.static(__dirname + '/src');

app.use(staticPath);
var server = app.listen(8000,function(){
	console.log("App Listening in: http://%s:%s",server.address().address,server.address().port);
});
