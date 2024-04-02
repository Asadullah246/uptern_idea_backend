// const get user
import express from "express";
import { createUserApi, getUser, getUsers,updateUser,deleteUser, loginUser } from "./user.controller.js";
const router = express.Router();
// post single users
router.post("/", createUserApi);
router.post("/login", loginUser);
// patch single users
router.patch("/:_id", updateUser);
// delete single users
router.delete("/:_id", deleteUser);
// single users
router.get("/:id", getUser);
// all users
router.get("/", getUsers);

export default router;
