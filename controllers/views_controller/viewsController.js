//this is the main views controller for my app

module.exports = {
	index(req, res) {
		res.render(`main/index`);
	},

	locationSpecific(req, res) {
		res.render(`main/fishByLocation`, {
			data: res.locals.fish
		});
		console.log(res.locals.fish)
		// res.locals.location = req.params.location
		// console.log(res.locals)
	},
//**************** WILL REVISIT *******************
	oneFish(req, res) {
		res.render(`main/singleFish`)
		console.log(res.locals.fish)
	},

//**************** WILL REVISIT *******************
	handleUpdate(req, res) {
		console.log(req.params.id)
		res.redirect(`/gofish/${req.params.id}`)
	}


}