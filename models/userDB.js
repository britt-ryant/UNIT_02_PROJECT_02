
//require the connections file in the controllers directory for pg-promise
const db = require(`../config/connection.js`);

module.exports = {
	//check the table to see if the username exists
	doesUserExist(uname){
		return db.one(`SELECT * FROM user_id WHERE uname=$1`, uname);
	},
	//store a new user into the users table
	createNewUser(cred){
		return db.one(`INSERT INTO user_id(uname, password) VALUES ($[uname], $[password]) RETURNING *`, cred);
	},
	//check to see if the username and password match in the users table at login
	checkCred(cred){
		return db.one(`SELECT * FROM user_id WHERE uname=$[uname] AND password=$[password]`, cred)
	},
	//create a new instance of a fish that is associated with that particular user
	createUserFish(newEntry){
		return db.one(`INSERT INTO user_information(user_id, user_fish_id, user_fish_weight, user_fish_loc_id, user_fish_info) VALUES ($[user_id], $[user_fish_id], $[user_fish_weight], $[user_fish_loc_id], $[user_fish_info]) RETURNING id`, newEntry)
	},
	//check the tabel for fish and locations and see if the instance exists already
	checkIfLoc(data) {
		return db.one(`SELECT * FROM fish_location WHERE fish_id=$[fish_id] AND location_id=$[location_id]`, data)
	},
	//^^if not, add the instance
	addLoc(data) {
		return db.one(`INSERT INTO fish_location(fish_id, location_id)VALUES ($[fish_id], $[location_id])RETURNING *`, data)
	},
	//retreive all of the information associated with the particular user in the session
	getAllUserData(data) {
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
	//retreive the information of the instance selected to edit
	getEditInfo(id) {
		return db.one(`SELECT * FROM user_information WHERE id=$1`, id)
	},
	//^^update that information based on the new user entry
	updateInfo(data) {
		return db.one(`UPDATE user_information 
			SET 
			user_fish_weight = $[user_fish_weight],
			user_fish_loc_id = $[user_fish_loc_id],
			user_fish_info = $[user_fish_info]
			WHERE id = $[id]
			RETURNING *`, data)
	},
	//check the user_information table to see if the user has any fish instances in the table
	doesListExist(id){
		return db.many(`SELECT * FROM user_information WHERE user_id = $1`, id);
	},
	//remove the instance
	remove(id) {
		return db.none(`DELETE FROM user_information 
			WHERE id = $1`, id);
	}
};
