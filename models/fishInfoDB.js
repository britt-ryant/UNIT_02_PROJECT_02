const db = require(`../config/connection`)

module.exports = {

	showLib() {
		return db.many(`SELECT * FROM fish_library;`)
	},


	singleFishFullInfo(fish) {
		return db.one(`SELECT * 
			FROM fish_library
			WHERE species=$1`, fish)
	},

	getAllLocationsForOne(fishSpecies) {
		return db.any(`SELECT locations.location
			FROM fish_library 
			JOIN fish_location 
			ON fish_library.fish_lib_id=fish_location.fish_id
			JOIN locations
			ON fish_location.location_id = locations.id
			WHERE fish_library.species=$1
			ORDER BY locations.location`, fishSpecies)
	}



}