import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
import { user } from "./user.model.js";

// create Job
export const createuser = async (data) => {
  const findUser = await user.findOne({ signingId: data.signingId });
  if (findUser) {
    return null;
  } else {
    const result = new user(data);
    await result.save();
    return result;
  }
};


export const patchJob = async ({
  _id,
  data,
})=> {
  // const query = { _id: new ObjectId(_id) };
  const query = { signingId: _id };
  const updateDoc = { $set: data };
  const option = { upsert: true, runValidators: true };
  const result = await user.findByIdAndUpdate(query, updateDoc, option);
  return result;
};

// delete Job
export const removeJob = async (_id) => {
  const result = await user.findByIdAndDelete({ _id: new ObjectId(_id) });
  return result;
};

// get single Job from DB
export const getSingelUser = async (id) => {
  const result = await user.findOne(
    {signingId:id}
  )
  return result;
};
// // get single Job from DB
// export const getSingelUser = async (id) => {
//   const result = await user.findById(
//     id
//   )
//   return result;
// };

// get Jobs from DB
export const getALLusers = async ()=> {
  const result = await user.find({});
  return result;
};
