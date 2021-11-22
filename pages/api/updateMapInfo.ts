import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function updateMapInfo(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({ filename: './mydb.sqlite', driver: sqlite3.Database });
  const { Id, Name, Price, Shower, Toilet, Water, Roof, Parking } = req.body;

  let data = [Name, Price, Shower, Toilet, Water, Roof, Parking, Id];
  let sql = `UPDATE mapinfo SET Name = ? , Price = ? ,Shower = ?,Toilet = ?, Water = ?, Roof=? ,Parking = ? WHERE id = ?`;

  await db.run(sql, data, function (err: any) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated`);
  });

  res.status(200).end();
}
