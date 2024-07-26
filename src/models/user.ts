import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "The username of the user is required"]
    },
    password: {
      type: String,
      required: [true, "The password of the user is required"]
    }
  },
  {
    timestamps: true
  }
);

UserSchema.methods.toJSON = function () {
  const { __v, _id, ...user } = this.toObject();
  return { ...user, uid: _id };
};

export default model("User", UserSchema);
