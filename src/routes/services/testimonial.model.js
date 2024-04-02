import { Schema, model } from "mongoose";

const BlogTextSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const jobSchema = new Schema(
  {
    image: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: [BlogTextSchema],
      required: false,
    },
  },
  { timestamps: true }
);

const Job = model("Services", jobSchema); 

export { Job };
