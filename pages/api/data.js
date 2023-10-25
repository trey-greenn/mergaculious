// pages/api/data.js

import clientPromise from "../../utils/dbConnect";


export default async function handler(req, res) {
  const client = await clientPromise;

  const db = client.db('test');

  const data = await db.collection("test").find({}).toArray();

  res.json(data);
  console.log(data)
}
