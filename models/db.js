const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NewsDB',{ useNewUrlParser: true },(err) =>{
	if(!err){
		console.log("DB is Successfully Connect...");
	}
	else{
		console.log("Find a Error"+err);
	}
});

require('./News.model');
