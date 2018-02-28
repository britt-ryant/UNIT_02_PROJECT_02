const db = require(`../config/connection.js`);

module.exports = {
	doesUserExist(uname){
		// console.log(uname)
		return db.one(`SELECT * FROM user_id WHERE uname=$1`, uname);
	},

	createNewUser(uname){
		return db.one(`INSERT INTO user_id(uname) VALUES ($1) RETURNING *`, uname);
	},

	createUserFish(newEntry){
		return db.one(`INSERT INTO user_information(user_id, user_fish_id, user_fish_weight, user_fish_loc_id, user_fish_info) VALUES ($[user_id], $[user_fish_id], $[user_fish_weight], $[user_fish_loc_id], $[user_fish_info]) RETURNING id`, newEntry)
	},

	getAllUserData(data) {
		// return db.any(`SELECT * FROM user_information WHERE user_id=$1`, data)
		return db.any(`SELECT user_information.id, user_id.uname, locations.location, fish_library.species, user_information.user_fish_weight, user_information.user_fish_info 
			FROM user_information
			JOIN user_id
			ON user_id.u_id = user_information.user_id
			JOIN locations
			ON locations.id = user_information.user_fish_loc_id
			JOIN fish_library
			ON fish_library.fish_lib_id = user_information.user_fish_id
			WHERE user_information.user_id = $1
			ORDER BY fish_library.species`, data)
	},

	getEditInfo(id) {
		return db.one(`SELECT * FROM user_information WHERE id=$1`, id)
	},

	updateInfo(data) {
		return db.one(`UPDATE user_information 
			SET 
			user_fish_weight = $[user_fish_weight],
			user_fish_loc_id = $[user_fish_loc_id],
			user_fish_info = $[user_fish_info]
			WHERE id = $[id]
			RETURNING *`, data)
	},

	remove(id) {
		console.log(id);
		return db.none(`DELETE FROM user_information 
			WHERE id = $1`, id)
	}


};
