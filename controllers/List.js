const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = mongoose.model('News');

router.get('/',(req,res) => {
	News.find((err,doc) => {
		if(!err){
			res.render('News/list',{
				list: doc
			});
		}
		else{
			console.log("Error on reterving new list :" + err);
		}

	});
});

module.exports = router;
