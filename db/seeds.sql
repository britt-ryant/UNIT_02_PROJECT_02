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
INSERT INTO locations (location) VALUES 
('North East Canyon'),('Southern East Coast'),('North Pacific'),('South Pacific'),('Gulf Of Mexico');

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
