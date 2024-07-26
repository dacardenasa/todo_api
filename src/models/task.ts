import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    isActive: {
      type: Boolean,
      default: true,
      required: true
    },
    title: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default model("Task", taskSchema);