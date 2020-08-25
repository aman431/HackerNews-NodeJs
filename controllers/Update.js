const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = mongoose.model('News');
router.get('/',(req,res) =>{
	res.render('News/Update',{
		Update:'list'
	});
});

router.post('/',(req,res) => {
	News.find({email: req.body.email})
	.exec()
	.then(result => {
		if(result.length < 1){
			return res.status(405).json({
				message:'Dont find any record'
			});
		}
		else{
			/*
			return res.status(200).json({
				//message: 'Successfully',
			});*/

			
		}
	})
});


module.exports = router;
