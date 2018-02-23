//require pg-promise


const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig`);

const db = pgp(dbConfig);

module.exports = {
//******************** test function to make sure that everything is linked ******************
	// showLib() {
	// 	console.log(`maiking it here`)
	// 	return db.many(`SELECT * FROM fish_library;`)
	// },
//******************** test function to make sure that everything is linked ******************

	showOne(id) {
		console.log(`showing random fish`)
		return db.one(`SELECT * FROM fish_library WHERE id=$1`, id)
	},
}