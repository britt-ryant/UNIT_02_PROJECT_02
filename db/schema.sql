
-- This is the schema file for my fishing app. It connects to the proper database.  If the table already exists, the table is dropped. Create the entire fish_library table.






DROP TABLE IF EXISTS fish_library;
-- DROP TABLE IF EXISTS northeast_canyon;
DROP TABLE IF EXISTS fish_location;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS user_id;
DROP TABLE IF EXISTS user_information;

CREATE TABLE fish_library (
	fish_lib_id SERIAL PRIMARY KEY,
	species VARCHAR(255),
	weight INTEGER,
	caught VARCHAR(255),
	info VARCHAR(500),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

-- *************** TO BE DELETED, STILL FIGURING OUT TABLE LAYOUT *********************

-- CREATE TABLE northeast_canyon (
-- 	id SERIAL PRIMARY KEY,
-- 	species VARCHAR(255),
-- 	location_id INTEGER,
-- 	weight INTEGER,
-- 	caught VARCHAR(255),
-- 	date_created TIMESTAMP NOT NULL DEFAULT NOW()
-- );

-- *************** TO BE DELETED, STILL FIGURING OUT TABLE LAYOUT *********************

CREATE TABLE fish_location (
	id SERIAL PRIMARY KEY,
	fish_id INTEGER,
	location_id INTEGER
);

CREATE TABLE locations (
	id SERIAL PRIMARY KEY,
	location VARCHAR(255),
	lat_deg INTEGER,
	lat_dec INTEGER,
	lon_deg INTEGER,
	lon_dec INTEGER,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_id (
	u_id SERIAL PRIMARY KEY,
	uname VARCHAR(255)
);

CREATE TABLE user_information (
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	user_fish_id INTEGER,
	user_fish_weight INTEGER,
	user_fish_loc_id INTEGER,
	user_fish_info VARCHAR(255)
);




