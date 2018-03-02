const db = require(`../config/connection.js`);

module.exports = {
	doesUserExist(uname){
		return db.one(`SELECT * FROM user_id WHERE uname=$1`, uname);
	},

	createNewUser(cred){
		return db.one(`INSERT INTO user_id(uname, password) VALUES ($[uname], $[password]) RETURNING *`, cred);
	},

	checkCred(cred){
		return db.one(`SELECT * FROM user_id WHERE uname=$[uname] AND password=$[password]`, cred)
	},

	createUserFish(newEntry){
		return db.one(`INSERT INTO user_information(user_id, user_fish_id, user_fish_weight, user_fish_loc_id, user_fish_info) VALUES ($[user_id], $[user_fish_id], $[user_fish_weight], $[user_fish_loc_id], $[user_fish_info]) RETURNING id`, newEntry)
	},

	checkIfLoc(data) {
		return db.one(`SELECT * FROM fish_location WHERE fish_id=$[fish_id] AND location_id=$[location_id]`, data)
	},

	addLoc(data) {
		return db.one(`INSERT INTO fish_location(fish_id, location_id)VALUES ($[fish_id], $[location_id])RETURNING *`, data)
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

	doesListExist(id){
		return db.many(`SELECT * FROM user_information WHERE user_id = $1`, id);
	},


	remove(id) {
		return db.none(`DELETE FROM user_information 
			WHERE id = $1`, id);
	},




};
