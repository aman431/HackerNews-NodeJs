const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator/check');

router.get('/',(req,res) =>{
	res.render('News/login',{
		viewLogin:'Login'
	});
});

/*
router.get('/list',(req,res) => {
	res.render('News/addOrEdit',{
		viewList: 'list'
	});
});
*/

router.post('/',(req,res,next) =>{
	User.find({email:req.body.email})
	.exec()
	.then(result =>{ 
		if(result.length < 1){
			return res.status(405).json({
				message:'Auth Failed'
			})
		}
		bcrypt.compare(req.body.password, result[0].password, (err,result1) => {
			if(err){
				return res.status(401).json({
					message:'Auth Failed'
				});
			}
			if(result1){
				const token = jwt.sign(
					{
						email: result[0].email,
						user_id: result[0]._id
					}, 
					process.env.JWT_KEY,
					{
						expiresIn: "1h"
					}
				);
				return res.status(200).json({
					message:"Auth Successful",
					token: token
				});
				return token;
				//return res.redirect('news/');
			}
			res.status(401).json({
				message: 'Auth Failed'
			});
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		})
	});
});

router.get('/News',(req,res) => {
	res.render('News/addOrEdit',{
		viewList: 'list'
	});
});



module.exports = router;
