import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    instagram: {
      type: String,
      required: false,

    },
    linkedIn: {
      type: Number,
      required: false,

    },
    twitter: {
      type: String ,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const user = model("User", userSchema);

export { user };

