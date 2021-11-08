import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function updateMapInfo(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({ filename: './mydb.sqlite', driver: sqlite3.Database });
  const { Id, Name, Price, Shower, Water, Toilet, Roof, Parking } = req.body;
  await db.run('UPDATE mapinfo set Shower = 1 WHERE id = 1');
  res.status(200);
}
