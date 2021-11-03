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

INSERT INTO MapInfo (name,lat,lon,price,shower,toilet,roof,parking) values('道の駅むかわ',42.5741365, 141.924976,0,1,1,1,1);

-- Down
DROP TABLE MapInfo;