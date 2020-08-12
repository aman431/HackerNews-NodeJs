var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.get('/css/style.css',function(req,res){
	res.sendFile(__dirname+'/css/style.css');
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000');
})
