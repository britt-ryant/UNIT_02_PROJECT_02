const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig`);

const db = pgp(dbConfig);

module.exports = {

	showLib() {
		// console.log(`maiking it here`)
		return db.many(`SELECT * FROM fish_library;`)
	},



}