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


};