
//require the connections file in the controllers directory for pg-promise
const db = require(`../config/connection`)

module.exports = {
	//select all from the fish_library table
	showLib() {
		return db.many(`SELECT * FROM fish_library;`)
	},
	//retrieve information about a single species
	singleFishFullInfo(fish) {
		return db.one(`SELECT * 
			FROM fish_library
			WHERE species=$1`, fish)
	},
	//retrieve all of the locations present in the table of locations
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