const userDB = require(`../../models/userDB.js`);
const mainDB = require(`../../models/mainDB.js`)

module.exports = {
	checkUser(req, res, next) {
		userDB.doesUserExist(req.body.uname)
		.then(result => {
			req.session.error = "Please Choose another Username";
			res.redirect(`back`);

		})
		.catch(newUser => {
			req.session.user = req.body.uname;
			req.session.error = " ";
			next();
		})
	},

	createUser(req, res, next) {
		userDB.createNewUser(req.session.user)
		.then(result => {
			req.session.user = result
			next()
		})
		.catch(err => {
			next(err)
		})
	},

	isUser(req, res, next) {
		console.log(`made it here`)
		console.log(req.session.user)
		if(req.session.user !== undefined) {
			next();
		} else {
			res.redirect(`/user`)
		}
	},

	test(req, res, next) {
		console.log(res.locals.location, res.locals.singleFishSpecies);
		next()
	}

// 	addToUserFishData(req, res, next) {
// 		console.log(req.params.species)
// 		userDB.createNewUserEntry(req.params.species)
// 		.then(result => {
// 			res.locals.newUserFish = 			
// 		})
// 		.catch()
// 	}
};