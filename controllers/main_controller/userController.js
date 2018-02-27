const userDB = require(`../../models/userDB.js`);

module.exports = {
	checkUser(req, res, next) {
		userDB.doesUserExist(req.body.uname)
		.then(result => {
			req.session.error = "Please Choose another Username";
			console.log(`I am here`, req.session.error)
			res.redirect(`back`);

		})
		.catch(newUser => {
			console.log(newUser)
			req.session.user = req.body.uname;
			req.session.error = " ";
			next();
		})
	},

	createUser(req, res, next) {
		userDB.createNewUser(req.session.user)
		.then(result => {
			req.session.user = result
			console.log(`test`, req.session.user)
			console.log(result)
			next()
		})
		.catch(err => {
			next(err)
		})
	}
};