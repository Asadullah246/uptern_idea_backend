import { Schema, model } from "mongoose";


const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  comment: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const linksSchema = new Schema({
  facebook: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  linkedIn: {
    type: String,
    required: false,
  },
}, { timestamps: true });


const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  links:{linksSchema},
}, { timestamps: true });


const jobSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    author: {authorSchema},
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Job = model("Blogs", jobSchema);

export { Job };
