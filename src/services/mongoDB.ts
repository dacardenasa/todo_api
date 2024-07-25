const mongoose = require("mongoose");

const MONGO_DB_URI =
  process.env.MONGO_DB_URI ?? "mongodb://127.0.0.1:27017/todo_db";

export async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.info(err);
  }
}
