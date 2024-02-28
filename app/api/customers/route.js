import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// export async function GET(request) {
//   const client = new MongoClient(
//     "mongodb+srv://ovsiichukbohdan:Us3uEcP3pv1qak69@volynpack-customers.r0nxmfg.mongodb.net/"
//   );
//   await client.connect();
//   return new Response("hello");
// }

export async function POST(request) {
  const data = await request.json();

  const client = new MongoClient(
    "mongodb+srv://ovsiichukbohdan:Us3uEcP3pv1qak69@volynpack-customers.r0nxmfg.mongodb.net/"
  );

  try {
    await client.connect();
    await client.db("volynpack").collection("customers").insertOne(data);
    return new NextResponse("Customer data successfully sent to DB");
  } finally {
    await client.close();
  }
}
