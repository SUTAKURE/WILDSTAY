const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({ filename: './mydb.sqlite', driver: sqlite3.Database });
  await db.migrate({ force: true });

  const mapinfo = await db.all('SELECT * FROM mapinfo');
  console.log('ALL MAPINFO', JSON.stringify(mapinfo, null, 2));
}

setup();
