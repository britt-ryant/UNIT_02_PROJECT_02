-- I have created these tables for the inital build of the app, these table need to be populated with much more information than what is present, will address at a later date but is not necessary for the demonstrational purposes of this project

INSERT INTO fish_library (species, weight, caught, info) VALUES 
(
	'Bigeye Tuna',
	400,
	'N',
	''
),(
	'Yellowfin Tuna',
	150,
	'N',
	''
),(
	'Bluefin Tuna',
	1400,
	'N',
	''
),(
	'Albacore Tuna',
	80,
	'N',
	''
),(
	'Blue Marlin',
	1100,
	'N',
	''
),(
	'White Marlin',
	150,
	'N',
	''
),(
	'Swordfish',
	1000,
	'N',
	''
),(
	'Mako',
	1000,
	'N',
	''
),(
	'Mahi mahi',
	40,
	'N',
	''
),(
	'Striped Marlin',
	150,
	'N',
	''
),(
	'Black Marlin',
	2000,
	'N',
	''
),(
	'Atlantic Slamon',
	300,
	'N',
	''
);
INSERT INTO locations (location, lat_deg, lat_dec, lon_deg, lon_dec) VALUES ( 
'North East Canyon', 39, 419390, 72, 244713
),(
'Southern East Coast', 29, 443104, 80, 022363
),(
'North Pacific', 44, 853098, 124, 996772
),(
'South Pacific', 25, 674685, 118, 672257
),(
'Gulf Of Mexico', 26, 661870, 88, 764641
);

INSERT INTO fish_location (fish_id, location_id) VALUES (
1,1
),(
1,2
),(
1,4
),(
1,5
),(
2,1
),(
2,2
),(
2,4
),(
2,5
),(
3,1
),(
3,2
),(
3,3
),(
3,4
),(
3,5
),(
4,1
),(
4,3
),(
5,1
),(
5,2
),(
5,4
),(
5,5
),(
6,1
),(
6,2
),(
6,5
),(
7,1
),(
7,2
),(
7,4
),(
7,5
),(
8,1
),(
8,2
),(
8,3
),(
8,4
),(
8,5
),(
9,1
),(
9,2
),(
9,4
),(
9,5
),(
10,3
),(
10,4
),(
11,3
),(
11,4
),(
12, 3
); 
