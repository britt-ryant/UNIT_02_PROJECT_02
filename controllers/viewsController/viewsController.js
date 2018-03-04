//this is the main views controller for my app

//pretty self explanitory, mostly rendering all of the different views and sometimes passing data in the form of res.locals

//the handler methods use redirect

module.exports = {

	myPageError(err, req, res, next) {
		res.sendStatus(404)
	},

	index(req, res) {
		res.render(`main/index`, {
			data: res.locals.locations
		});
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

	login(req, res) {
		res.render(`users/login`, {
			err: req.session.error
		})
	},

	submitFish(req, res) {
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

	showWeather(req, res) {
		res.render(`main/weather`,{
			weatherData: res.locals.weather,
			locationData: res.locals.weatherLocation
		})

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