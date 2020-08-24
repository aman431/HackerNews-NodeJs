const  mongoose = require('mongoose');

var NewSchema = new mongoose.Schema({
	author:{
		type: String,
	},
	header:{
		type: String,	
	},
	subject:{
		type: String,
	},
	content:{
		type: String,
	}
});

mongoose.model("News",NewSchema);


