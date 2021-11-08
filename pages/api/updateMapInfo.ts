import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function updateMapInfo(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({ filename: './mydb.sqlite', driver: sqlite3.Database });
  const { Id, Title, Price, Shower, Water, Toilet, Roof, Parking } = req.body;
  await db.run(
    'UPDATE mapinfo set name = (Title),Price = (),Shower = (),Water = (),Toilet = (),Roof = (),Parking = () WHERE id = (Id)',
    Title,
    Price,
    Shower,
    Water,
    Toilet,
    Roof,
    Parking,
    Id,
  );
  res.status(200);
}
