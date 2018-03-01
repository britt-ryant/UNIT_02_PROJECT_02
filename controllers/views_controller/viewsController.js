//this is the main views controller for my app

module.exports = {

	myPageError(err, req, res, next) {
		console.log(`------> IM HERE`,req.session.user)
		res.sendStatus(404)
	},

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

	viewSingleFish(req, res) {
		res.render(`main/singleFish`)
	},

	makeUser(req, res) {
		res.render(`users/createUser`, {
			err: req.session.error
		})
	},

	submitFish(req, res) {
		let location = res.locals.location;
		let fishId = res.locals.singleFishSpecies.fish_lib_id;
		res.render(`users/newFish`, {
			data: req.params.species,
			fish_id: fishId
		});		
	},

	usersPage(req, res) {
		res.render(`users/userPage`)
	},

	editFish(req, res) {
		res.render(`users/updateFish`, {
			data: res.locals.editFish
		});
	},

	handleNewUser(req, res) {
		res.redirect(`/`)
	},

	handleUpdate(req, res) {
		res.redirect(`/gofish/${req.params.id}`)
	},

	handleSubmitFish(req, res) {
		res.redirect(`/user/mypage`)
	}, 



}