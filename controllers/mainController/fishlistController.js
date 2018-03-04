

//require the models that this controller calls methods from

const fishInfoDB = require(`../../models/fishInfoDB.js`);

module.exports = {
	//Grab all of the information for all the fish in the fish_library database
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
	//Grab the information for the particular instance that was requested
	fishSpecific(req, res, next) {
		fishInfoDB.singleFishFullInfo(req.params.species)
		.then(result => {
			res.locals.singleFishSpecies = result;
			next();
		})
		.catch(err => {
			next(err);
		})
	},
	//Grab all of the locations that exist for that particular fish (requested) from the fish_location table.
	fishSpecificLocation(req, res, next) {
		fishInfoDB.getAllLocationsForOne(req.params.species)
		.then(results => {
			res.locals.fishLocations = results;
			next();
		})
		.catch(err => {
			next(err);
		})
	}
};