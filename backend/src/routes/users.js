
import express from "express";
import {
    getUsersHandler,
    signupHandler,
    deleteUserHandler,
    getUserByIdHandler,
    updateUserHandler,
    signinHandler,

} from "../handlers/users";

export const usersRouter = express.Router();

// Get users
usersRouter.get("/users", getUsersHandler);
// Get user by id
usersRouter.get("/users/:id", getUserByIdHandler);
// Create user
usersRouter.post("/users/signup", signupHandler);
usersRouter.post("/users/signin", signinHandler)
// Update user
usersRouter.put("/users/:id", updateUserHandler);
// Delete user
usersRouter.delete("/users/:id", deleteUserHandler);

