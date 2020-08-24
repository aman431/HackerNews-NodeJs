const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

router.get('/',(req,res)=>{
	res.render('News/user',{
		viewUser: 'User'
	});
});

router.post('/',(req,res) =>{
		bcrypt.hash(req.body.password, 10, (err,hash) => {
			if(err){
				return res.status(500).json({
					error : err
				});
			}else{
				var user = new User({
					_id: new mongoose.Types.ObjectId(),
					firstname: req.body.firstname,
					lastname: req.body.lastname,
					email: req.body.email,
					password: hash
				});
				user
					.save()
					.then(result => {

						res.redirect('user/login');

						//res.json('User Created');
					})
					.catch(err => {
						console.log(err);
						res.status(500).json({
							error: err
						})
					});
			}
		});
	});

router.get('/login',(req,res) => {
	User.find((err,doc) => {
		if(!err){
			res.render("News/login",{
				list: doc
			})
		}
	});
});

module.exports = router;
