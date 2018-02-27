const fishInfoDB = require(`../../models/fishInfoDB.js`);

module.exports = {

	index(req, res, next) {
		fishInfoDB.showLib()
		.then(results => {
			res.locals.allFish = results;
			next();
		})
		.catch(err => {
			next(err);
		})
	},

	fishSpecific(req, res, next) {
	
		fishInfoDB.singleFishFullInfo(req.params.species)
		.then(result => {
			res.locals.singleFishSpecies = result;
			console.log(result)
			next()
		})
		.catch(err => {
			next(err)
		})
	},

	fishSpecificLocation(req, res, next) {
		fishInfoDB.getAllLocationsForOne(req.params.species)
		.then(results => {
			res.locals.fishLocations = results
			console.log(results)
			next()
		})
		.catch(err => {
			next(err)
		})
	}



};