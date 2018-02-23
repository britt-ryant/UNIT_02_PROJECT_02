//require the main database (fish_library_db)
const mainDB = require(`../../models/mainDB.js`)

module.exports = {
	
	index(req, res) {
		mainDB.showLib()
		.then(results => {
			res.json({
			message: `ok`,
			data: results
			})
		})
		.catch(err => {
			res.status(500).json({
				message: `500 : err`,
				data: err
			})
		})
	},

	getOneFish(req, res) {
		//nine is hardcoded number of fish in the database, must be channged later!!!!!!
		let randomFishId = Math.ceil(Math.random()*9)
		mainDB.showOne(randomFishId)
		.then(result => {
			res.json({
				message: `ok`,
				data: result
			})
		})
		.catch(err => {
			res.status(500).json({
				message: `500 : YOURE FUCKED`,
				data: err
			})
		})
	}
}