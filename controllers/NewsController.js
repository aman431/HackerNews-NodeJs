const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = mongoose.model('News');

router.get('/',(req,res)=>{
	res.render("News/addOrEdit",{
		viewTitle: "Insert Employee"
	});
});

router.post('/',(req,res) => {
	insertRecord(req,res);
})

function insertRecord(req,res){
	var news = new News();
	news.author = req.body.author;
	news.header = req.body.header;
	news.subject = req.body.subject;
	news.content = req.body.content;
	//news.city = req.body.city;
	news.save((err,doc)=>{
		if(!err){
			res.redirect('news/list');
		}
		else{
			console.log("Error during record Isertion"+err);
		}

	});
}

router.get('/list', (req,res)=> {
	News.find((err,docs) => {
		if(!err){
			res.render("News/list", {
				list: docs
			});
		}
		else {
			console.log("Error in reterving News List :" + err);
		}
	});
});

module.exports = router;
