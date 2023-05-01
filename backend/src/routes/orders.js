import express from "express";
import { createOrderHandler, getOrderByIdHandler, getOrdersHandler } from "../handlers/orders";

export const ordersRouter = express.Router();

// Get orders
ordersRouter.get("/orders", getOrdersHandler);
// Get order by id
ordersRouter.get("/orders/:id", getOrderByIdHandler);
// Create order
ordersRouter.post("/orders", createOrderHandler);
