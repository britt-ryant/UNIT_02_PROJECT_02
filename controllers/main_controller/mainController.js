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