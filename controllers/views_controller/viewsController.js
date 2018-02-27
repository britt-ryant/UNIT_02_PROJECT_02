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

	submitFish(req, res) {
		let location = res.locals.location;
		let fishId = res.locals.singleFishSpecies.fish_lib_id;
		res.render(`users/userFishList`, {
			data: req.params.species,
			fish_id: fishId
		})		
	},

	usersPage(req, res) {
		res.render(`users/userPage`)
	},

	handleNewUser(req, res) {
		res.redirect(`/`)
	},

	handleUpdate(req, res) {
		res.redirect(`/gofish/${req.params.id}`)
	},

	handleSubmitFish(req, res) {
		res.redirect(`/user/mypage`)
	}


}