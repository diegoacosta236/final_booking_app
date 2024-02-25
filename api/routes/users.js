import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// Check authentication of user
router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send("Logged in.")
})

// Update
router.put('/:id', updateUser)

// Delete
router.delete('/:id', deleteUser)

// Get
router.get('/:id', getUser)

// Get All
router.get('/', getUsers)

export default router