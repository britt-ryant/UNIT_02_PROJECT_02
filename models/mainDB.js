
//require the connections file in the controllers directory for pg-promise
const db = require(`../config/connection`)

module.exports = {
	//retrieve all of the information associated with each particular location
	getLocations(){
		return db.any(`SELECT * FROM locations;`)
	},
	//retrieve all of the information about a single locaiton with a specific id
	getLocation(id){
		return db.one(`SELECT * FROM locations WHERE id=$1`, id)
	},
//************************** not used at the moment ******************************************
	showOne(id) {
		console.log(`showing random fish`)
		return db.one(`SELECT * FROM fish_library WHERE id=$1`, id)
	},
//************************** not used at the moment ******************************************
	//retreive all of the information about all of the fish associated with a particular location
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
	//add a new fish to the table fish_library(main fish table)
	makeNewFish(fish) {
		return db.one(`INSERT INTO fish_library(species, weight) VALUES ($[species], $[weight]) RETURNING fish_lib_id`, fish)
	},
	//create the location for the fish that is being stored in the table that shows all of the locations that the fish can be found
	makeNewLocation(fish) {
		return db.one(`INSERT INTO fish_location(fish_id, location_id) VALUES ($[newId], $[newLoc]) RETURNING id`, fish)		
	}
}