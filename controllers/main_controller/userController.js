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
		if(req.session.user !== undefined) {
			next();
		} else {
			res.redirect(`/user`)
		}
	},

	createUserFish(req, res, next) {
		let newFish = {
			user_id: req.session.user.u_id,
			user_fish_id: parseInt(req.body.species),
			user_fish_weight: parseInt(req.body.weight),
			user_fish_loc_id: parseInt(req.body.location),
			user_fish_info: req.body.info
		};
		userDB.createUserFish(newFish)
		.then(result => {
			res.locals.newUserFish = result;
			next()
		})
		.catch(err => {
			next(err)
		})
	},

	getUserFish(req, res, next) {
		userDB.getAllUserData(req.session.user.u_id)
		.then(results => {
			res.locals.userData = results;
			next()
		})
		.catch(err => {
			next(err)
		})
	},

	userEditInfo(req, res, next) {
		userDB.getEditInfo(req.params.id)
		.then(result => {
			res.locals.editFish = result;
			next();
		})
		.catch(err => {
			next(err)
		})

	},

	updateFish(req, res, next) {
		let insertIntoUpdate = {
			id: parseInt(req.params.id),
			user_fish_weight: parseInt(req.body.weight),
			user_fish_loc_id: parseInt(req.body.location),
			user_fish_info: req.body.info
		};
		userDB.updateInfo(insertIntoUpdate)
		.then(result => {
			res.locals.updatedFish = result;
			next()
		})
		.catch(err => {
			next(err)
		})
	},

	destroy(req, res, next) {
		userDB.remove(parseInt(req.params.id))
		.then(() => next())
		.catch(err => next(err))
	},
	test(req, res, next) {
		console.log(`being passed`)
		res.render(`users/testPage`)
	}
};