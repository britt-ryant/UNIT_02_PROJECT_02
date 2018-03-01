const userDB = require(`../../models/userDB.js`);
const mainDB = require(`../../models/mainDB.js`)

module.exports = {

	//Check to see if the username exists in the database 	
	checkUser(req, res, next) {
		userDB.doesUserExist(req.body.uname)
		.then(result => {
			req.session.error = `Please choose another username ${req.body.uname} already exists!`;
			res.redirect(`back`);

		})
		.catch(newUser => {
			req.session.user = req.body.uname;
			req.session.error = " ";
			next();
		})
	},
	//Check to see if the user is logged in 
	checkLoggedIn(req, res, next) {
		req.session.user === undefined ? res.redirect(`/user`) : next();
	},
	//Create a new user
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
	//Create a new fish that is associated with that user and storing unique information the pertains to that user/fish
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
	//Check the current created instance to see if the the location/fish combo already exists in the fish_location table 
	checkLoc(req, res, next) {
		let locAdd = {
			fish_id: parseInt(req.body.species),
			location_id: parseInt(req.body.location)
		};
		userDB.checkIfLoc(locAdd)
		.then(result => {
			res.redirect(`/user/mypage`)
		})
		.catch(() => {
			next()
		})
	},
	//If the location/fish instance does not exist in the fish_locaiton table, add that instance to the fish_location table
	addLocationToFish(req, res, next) {
		let locAdd = {
			fish_id: req.body.species,
			location_id: req.body.location
		};
		userDB.addLoc(locAdd)
		.then(result => {
			res.locals.newLoc = result;
			next()
		})
		.catch(err => {
			next(err)
		})
	},
	//Grab all of the saved fish for the current user and display them on the users fish page
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
	//Edit the information that is displayed on the user fish page for each fish
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
	//update the edited information
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
	//Check to see if there are any instances saved in the user_information table for that particular user, if not, show the page that displays the message that the table is empty and provide links to add fish
	isListFull(req, res, next) {
		userDB.doesListExist(req.session.user.u_id)
		.then(result => {
			next()
		})
		.catch(err => {
			res.render(`users/userPageEmpty`, {
				data: req.session.user.uname
			})
		})
	},
	//delete the instance of the fish in the user_information table
	destroy(req, res, next) {
		userDB.remove(parseInt(req.params.id))
		.then(() => next())
		.catch(err => next(err))
	}
};