const  mongoose = require('mongoose');

var NewSchema = new mongoose.Schema({
	author:{
		type: String,
		required: "This field is required",
	},
	header:{
		type: String,
		required: "This field is required",
	},
	subject:{
		type: String,
		required: "This field is required",
	},
	content:{
		type: String,
		required: "This field is required",
	}
});

mongoose.model("News",NewSchema);


