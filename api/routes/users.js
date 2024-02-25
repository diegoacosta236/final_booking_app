import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Check authentication of user
router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send("Logged in.")
})

// Verify a user
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("You are logged in and able to delete your account.")
})

// Verify that a user is an Admin
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("You are logged in and able to delete whatever you want.")
})

// Update
router.put('/:id', verifyUser,updateUser)

// Delete
router.delete('/:id', verifyUser,deleteUser)

// Get
router.get('/:id', verifyUser,getUser)

// Get All
router.get('/', verifyAdmin,getUsers)

export default router