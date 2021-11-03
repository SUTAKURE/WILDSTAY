import { NextApiRequest, NextApiResponse } from 'next';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

//personテーブルからデータを取得する
export default async function getMapInfo(req: NextApiRequest, res: NextApiResponse) {
  //db接続
  const db = await open({ filename: './mydb.sqlite', driver: sqlite3.Database });

  const people = await db.all('select * from mapinfo');

  res.json(people);
}
