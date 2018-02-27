//require pg-promise


const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig`);

const db = pgp(dbConfig);

module.exports = {


//************************** not used at the moment ******************************************

	showOne(id) {
		console.log(`showing random fish`)
		return db.one(`SELECT * FROM fish_library WHERE id=$1`, id)
	},

//************************** not used at the moment ******************************************

	showByLocation(id) {
		console.log(id)
		return db.any(`SELECT fish_library.species, fish_library.fish_lib_id, fish_library.weight, locations.location, locations.id 
			FROM fish_library 
			JOIN fish_location 
			ON fish_library.fish_lib_id=fish_location.fish_id
			JOIN locations
			ON fish_location.location_id = locations.id
			WHERE locations.id=$1
			ORDER BY fish_library.species`, id)
	},
//**************** WILL REVISIT *******************
	singleFishFullInfo(name) {

		return db.one(`SELECT * 
			FROM fish_library
			WHERE species=$1`, name)
	},
//**************** WILL REVISIT *******************
	makeNewFish(fish) {
		return db.one(`INSERT INTO fish_library(species, weight, caught, info) VALUES ($[species], $[weight], $[caught], $[info]) RETURNING fish_lib_id`, fish)
	},


	makeNewLocation(fish) {
		return db.one(`INSERT INTO fish_location(fish_id, location_id) VALUES ($[newId], $[newLoc]) RETURNING id`, fish)		
	}

}