
import express from "express";
import { getUsersHandler,
    createUserHandler,
    deleteUserHandler,
    getUserByIdHandler,
    updateUserHandler,

 } from "../handlers/users";

export const usersRouter = express.Router();

// Get users (+ filters)
usersRouter.get("/users", getUsersHandler);
// Get user by id
usersRouter.get("/users/:id", getUserByIdHandler);
// Create user
usersRouter.post("/users", createUserHandler);
// Update user
usersRouter.put("/users/:id", updateUserHandler);
// Delete user
usersRouter.delete("/users/:id", deleteUserHandler);

