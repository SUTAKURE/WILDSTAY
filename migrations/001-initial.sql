-- Up
CREATE TABLE MapInfo (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT,
   lat DECIMAL,
   lon DECIMAL,
   price SMALLINT,
   shower TINYINT,
   toilet TINYINT,
   roof TINYINT,
   parking TINYINT
);

INSERT INTO MapInfo (name,lat,lon,price,shower,toilet,roof,parking) values('道の駅むかわ',42.5741851589376, 141.92486292795556,0,1,1,1,1);

-- Down
DROP TABLE MapInfo;
