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
	viewSingleFish(req, res) {
		res.render(`main/singleFish`)
	},

//**************** WILL REVISIT *******************
	makeUser(req, res) {
		res.render(`users/createUser`, {
			err: req.session.error
		})
	},

	handleNewUser(req, res) {
		res.redirect(`/`)
	},


	handleUpdate(req, res) {
		console.log(req.params.id)
		res.redirect(`/gofish/${req.params.id}`)
	},


}