//this is the main views controller for my app

module.exports = {
	index(req, res) {
		res.render(`main/index`);
	},

	locationSpecific(req, res) {
		res.render(`main/fishByLocation`);
		console.log(res.locals.fish)
		
		// res.locals.location = req.params.location
		// console.log(res.locals)
	}
}