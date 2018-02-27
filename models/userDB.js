const db = require(`../config/connection.js`);

module.exports = {
	doesUserExist(uname){
		console.log(uname)
		return db.one(`SELECT * FROM user_id WHERE uname=$1`, uname);
	},

	createNewUser(uname){
		return db.one(`INSERT INTO user_id(uname) VALUES ($1) RETURNING *`, uname);
	}
};
