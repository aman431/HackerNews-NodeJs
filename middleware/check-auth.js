const jwt = require('jsonwebtoken');
//const User = require('../models/user');

module.exports = (req, res, next) => {
	console.log("aman")
	try{
		console.log('aman1');
		const token = req.headers('authorization').replace('Bearer')
		console.log('aman2');
		console.log(token);
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.userData = decoded;
		next();
	}
	catch(error)
	{
		return res.status(401).json({
			message:'Auth Failed'
		});
	}
};


/*
const auth = async (req,res,next) =>{
	try{
		const token = req.header('Authorization').replace('Bearer')
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		const user = await User.findOne({_id:decoded._id,'tokens.token':token})
		console.log(token);
		console.log(decoded);
		if(!user){
			throw new Error()
		}

		console.log(token);
		console.log(decoded);

		req.token = token
		req.user = user
		next()

	}catch(e){
		res.status(401).json({
			message: 'Authetication Failed...'
		})
	}
}

module.exports = auth

module.exports = (req, res, next) => {
	console.log("aman")
	try{
		console.log('aman1');
		const token = req.headers('Authorization').replace('Bearer')
		console.log('aman2');
		console.log(token);
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		const user = 
		req.userData = decoded;
		next();
	}
	catch(error)
	{
		return res.status(401).json({
			message:'Auth Failed'
		});
	}
};
*/
