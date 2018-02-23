
-- This is the schema file for my fishing app. It connects to the proper database.  If the table already exists, the table is dropped. Create the entire fish_library table.




\c fish_library_db;

DROP TABLE IF EXISTS fish_library;

CREATE TABLE fish_library (
	id SERIAL PRIMARY KEY,
	species VARCHAR(255),
	length INTEGER,
	weight INTEGER,
	points INTEGER,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);