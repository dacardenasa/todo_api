import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "The username of the user is required"]
  },
  password: {
    type: String,
    required: [true, "The password of the user is required"],
  }
});

export default model("User", UserSchema);
