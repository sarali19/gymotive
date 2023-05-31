import express from "express";
import { createOrdersHandler, getOrdersByClientIdHandler, getOrdersHandler } from "../handlers/orders";

export const ordersRouter = express.Router();

// Get orders
ordersRouter.get("/orders", getOrdersHandler);
// Get order by id
ordersRouter.get("/orders/:clientId", getOrdersByClientIdHandler);
// Create many orders
ordersRouter.post("/orders", createOrdersHandler);
