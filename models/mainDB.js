const db = require(`../config/connection`)




module.exports = {

	getLocations(){
		return db.any(`SELECT * FROM locations;`)
	},


//************************** not used at the moment ******************************************

	showOne(id) {
		console.log(`showing random fish`)
		return db.one(`SELECT * FROM fish_library WHERE id=$1`, id)
	},

//************************** not used at the moment ******************************************

	showByLocation(id) {
		return db.any(`SELECT fish_library.species, fish_library.fish_lib_id, fish_library.weight, locations.location, locations.id 
			FROM fish_library 
			JOIN fish_location 
			ON fish_library.fish_lib_id=fish_location.fish_id
			JOIN locations
			ON fish_location.location_id = locations.id
			WHERE locations.id=$1
			ORDER BY fish_library.species`, id)
	},

	makeNewFish(fish) {
		return db.one(`INSERT INTO fish_library(species, weight) VALUES ($[species], $[weight]) RETURNING fish_lib_id`, fish)
	},


	makeNewLocation(fish) {
		return db.one(`INSERT INTO fish_location(fish_id, location_id) VALUES ($[newId], $[newLoc]) RETURNING id`, fish)		
	}

}