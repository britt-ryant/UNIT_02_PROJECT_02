//require pg-promise and initate it, this file is referenced and require in all of the models for this app

const pgp = require(`pg-promise`)();
const dbConfig = require(`../config/dbConfig`);

module.exports = pgp(dbConfig);


