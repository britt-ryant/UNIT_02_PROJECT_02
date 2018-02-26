//require pg-promise


const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig`);

const db = pgp(dbConfig);

module.exports = {
//******************** test function to make sure that everything is linked ******************
	showLib() {
		// console.log(`maiking it here`)
		return db.many(`SELECT * FROM fish_library;`)
	},
//******************** test function to make sure that everything is linked ******************

//************************** not used at the moment ******************************************

	showOne(id) {
		console.log(`showing random fish`)
		return db.one(`SELECT * FROM fish_library WHERE id=$1`, id)
	},

//************************** not used at the moment ******************************************

	showByLocation(id) {
		console.log(id)
		return db.any(`SELECT fish_library.species, fish_library.weight, locations.location
			FROM fish_library 
			JOIN fish_location 
			ON fish_library.id=fish_location.fish_id
			JOIN locations
			ON fish_location.location_id = locations.id
			WHERE locations.id=$1
			ORDER BY fish_library.species`, id)
	},
}