//require the main database (fish_library_db)
const mainDB = require(`../../models/mainDB.js`)

module.exports = {

	getListOfLocations(req, res, next) {
		mainDB.getLocations()
			.then(results => {
				res.locals.location = results;
				// console.log(results)
				// console.log(res.locals.location)
				next()
			})
			.catch(err => {
				next(err)
			})
	},

//************ NOT SURE THAT THIS WILL BE RELEVENT ***********************

	getOneFishRandom(req, res) {
		//nine is hardcoded number of fish in the database, must be channged later!!!!!!
		let randomFishId = Math.ceil(Math.random()*9)
		mainDB.showOne(randomFishId)
		.then(result => {
			res.json({
				message: `ok`,
				data: result
			})
		})
		.catch(err => {
			res.status(500).json({
				message: `500 : YOURE FUCKED`,
				data: err
			})
		})
	},

//************ NOT SURE THAT THIS WILL BE RELEVENT ***********************
	
	locationSpecific(req, res, next) {
		// console.log(req.params.id)
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


}