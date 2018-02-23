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
	}
}