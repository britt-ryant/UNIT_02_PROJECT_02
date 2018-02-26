
-- This is the schema file for my fishing app. It connects to the proper database.  If the table already exists, the table is dropped. Create the entire fish_library table.




\c fish_library_db;

DROP TABLE IF EXISTS fish_library;
-- DROP TABLE IF EXISTS northeast_canyon;
DROP TABLE IF EXISTS fish_location;
DROP TABLE IF EXISTS locations;

CREATE TABLE fish_library (
	id SERIAL PRIMARY KEY,
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
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
