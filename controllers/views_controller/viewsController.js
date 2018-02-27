//this is the main views controller for my app

module.exports = {
	index(req, res) {
		res.render(`main/index`);
	},

	fullListOfSpecies(req, res){
		res.render(`main/fullLibrary`, {
			data: res.locals.allFish
		})
	},

	locationSpecific(req, res) {
		res.render(`main/fishByLocation`, {
			data: res.locals.fish
		});
	},
//**************** WILL REVISIT *******************
	oneFish(req, res) {
		res.render(`main/singleFish`)
	},

//**************** WILL REVISIT *******************
	handleUpdate(req, res) {
		console.log(req.params.id)
		res.redirect(`/gofish/${req.params.id}`)
	}


}