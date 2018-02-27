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
		console.log(newEntry)
		return db.one(`INSERT INTO user_information(user_id, user_fish_id, user_fish_weight, user_fish_loc_id, user_fish_info) VALUES ($[user_id], $[user_fish_id], $[user_fish_weight], $[user_fish_loc_id], $[user_fish_info]) RETURNING id`, newEntry)
	},

	getAllUserData(data) {
		return db.any(`SELECT * FROM user_information WHERE user_id=$1`, data)
	}
};
