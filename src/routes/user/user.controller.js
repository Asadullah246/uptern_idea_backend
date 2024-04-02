import { user } from "./user.model.js";
import {
  createuser,
  getALLusers,
  getSingelUser,
  login,
  patchJob,
} from "./user.service.js";
import jwt from "jsonwebtoken";

const SECRET_KEY =process.env.SECRET_KEY;



// create a single user
export const createUserApi = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await createuser(data);
    if (!user) {
      return res.status(401).json({ massage: "user already exists" });
    }
    return res.status(200).json({ status: "success", data: user });
  } catch (error) {
    return res.status(401).json({ massage: error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const data = req.body;
    const {email, password, rememberMe}=req.body
    const user = await login(data);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const expiresIn = rememberMe ? "7d" : "1d"; // Set token expiration
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn,
    });
    res.json({ token });
  } catch (error) {
    return res.status(401).json({ massage: error });
  }

};

// patch a single user
export const updateUser = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const data = req.body;
    const user = await patchJob({ _id, data });
    return res.status(201).json({ status: "success", data: user });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ massage: error });
  }
};

// delete a single user
export const deleteUser = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const user = await removeJob(_id);
    return res.status(201).json({ status: "success", data: user });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};

// get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await getALLusers();
    return res.status(200).json({ status: "success", data: users });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ massage: error });
  }
};
// get single users
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const users = await getSingelUser(id);
    return res.status(201).json({ status: "success", data: users });
  } catch (error) {
    console.log(error);
    return res.status(201).json({ massage: error });
  }
};
