//configuration of the database that is used for the main fish library

module.exports = process.env.DATABASE_URL || {
	host: 		process.env.DB_HOST || `localhost`,
	port: 		process.env.DB_PORT || 5432,
	database: 	process.env.DB_NAME || `fish_library_db`, 
;
