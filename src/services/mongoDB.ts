import { MongoClient, ServerApiVersion } from "mongodb";

const MONGO_DB_URI =
  process.env.MONGO_DB_URI ?? "mongodb://127.0.0.1:27017/todo_db";

const client = new MongoClient(MONGO_DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("todo_db").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

export async function connectMongoDB() {
  run().catch(console.dir);
}
