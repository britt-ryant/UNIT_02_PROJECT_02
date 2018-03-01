//require the main database (fish_library_db)
const mainDB = require(`../../models/mainDB.js`)

module.exports = {

//**************** ROUTER TESTING FUNCTION FOR CREATING NEW ROUTES ***************************
	test(req, res, next) {
		console.log(`being passed`)
		res.render(`users/testPage`)
		console.log(req.session.user)
	},

//**************** ROUTER TESTING FUNCTION FOR CREATING NEW ROUTES ***************************
	//Select all of the locaiton information from the locations table to be displayed on the fishByLocations page
	getListOfLocations(req, res, next) {
		mainDB.getLocations()
			.then(results => {
				res.locals.location = results;
				next()
			})
			.catch(err => {
				next(err)
			})
	},
	//Select all of the fish that exist in that particular location
	locationSpecific(req, res, next) {
		mainDB.showByLocation(req.params.id)
		.then(results => {
			res.locals.fish = results;
			next()
		})
		.catch(err => {
			next(err)
		})
	}, 
	//Create a new fish when the user enters the primary information for that fish
	createFish(req, res, next) {
		mainDB.makeNewFish(req.body)
		.then(result => {
			req.session.newFish = result;
			next();
		})
		.catch(err => {
			next(err);
		})
	},
	//Create a location instance for the new fish that was created in the previous function
	createLocation(req, res, next) {
		let newFishInfo = {
			newId: req.session.newFish.fish_lib_id,
			newLoc: parseInt(req.params.id)
		}
		mainDB.makeNewLocation(newFishInfo)
		.then(result => {
			res.locals.newLoc = result;
			next()
		})
		.catch(err => {
			next(err);
		})
	},
	//Check the weight entry in the input forms to see if the input value is a number, if so, allow submission, if not, display warning message
	isNumber(req, res, next) {
		if(isNaN(parseInt(req.body.weight))) {
			req.session.error = `"${req.body.weight}" is not a number, please enter weight in lbs`;
			res.redirect(`back`)
		} else {
			req.session.error = " ";
			next();
		}
	},


}