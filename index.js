var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.get('/css/style.css',function(req,res){
	res.sendFile(__dirname+'/css/style.css');
});
app.get('/css/Universe.jpeg',function(req,res){
	res.sendFile(__dirname+'/css/Universe.jpeg');
});
app.get('/app.js',function(req,res){
	res.sendFile(__dirname+'/app.js');
});

app.listen(port, function(){
	console.log('Example app listening on port '+port+' ');
})
