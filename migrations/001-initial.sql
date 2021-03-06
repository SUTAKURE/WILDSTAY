DROP TABLE IF EXISTS MapInfo;
-- Up
CREATE TABLE MapInfo (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TINYINT,
   lat DECIMAL,
   lon DECIMAL,
   price SMALLINT,
   shower TINYINT,
   water TINYINT,
   toilet TINYINT,
   roof TINYINT,
   parking TINYINT
);

INSERT INTO MapInfo (name,lat,lon,price,shower,water,toilet,roof,parking) values(0,42.5741851589376, 141.92486292795556,0,1,1,1,1,1);
INSERT INTO MapInfo (name,lat,lon,price,shower,water,toilet,roof,parking) values(1,43.5741851589376, 141.92486292795556,0,1,1,1,1,1);


-- Down
DROP TABLE MapInfo;
