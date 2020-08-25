/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/NewsDB'";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
mongodb://localhost:27017/NewsDB'
});
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aman431:ride4respect@cluster0.1vvgg.mongodb.net/NewsDB?retryWrites=true&w=majority',{ useNewUrlParser: true },(err) =>{
	if(!err){
		console.log("DB is Successfully Connect...");
	}
	else{
		console.log("Find a Error"+err);
	}
});

require('./News.model');
