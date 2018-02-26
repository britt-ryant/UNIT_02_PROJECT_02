//require the main database (fish_library_db)
const mainDB = require(`../../models/mainDB.js`)

module.exports = {
	
	allSpecies(req, res, next) {
		mainDB.showLib()
		.then(results => {
			res.locals.species = results;
			next();
		})
		.catch(err => {
			next(err);
		})
	},


//************ NOT SURE THAT THIS WILL BE RELEVENT ***********************

	getOneFish(req, res) {
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
	
	locationSpecific(req, res) {
		console.log(req.params.location)
		console.log(`in controller`)
		mainDB.showByLocation(req.params.location)
		.then(results => {
			res.json({
				message: `THIS WORKED`,
				data: results
			})
		})
		.catch(err => {
			res.status(500).json({
				message: `YOU SUCK`,
				data: err
			})
		})
	}

}