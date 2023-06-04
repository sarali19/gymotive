import express from "express";
import {
  getClientCartHandler,
  updateClientCartProductHandler,
  deleteClientCartProductHandler,
  addProductToClientCartHandler,
  deleteClientCartAllProductsHandler,
} from "../handlers/carts";

export const cartsRouter = express.Router();

// Get cart by client id
cartsRouter.get("/carts/:clientId", getClientCartHandler);
// Add product to cart
cartsRouter.post("/carts/:clientId/:productId", addProductToClientCartHandler);
// Update cart product (quantity)
cartsRouter.put("/carts/:clientId/:productId", updateClientCartProductHandler);
// Delete cart product
cartsRouter.delete("/carts/:clientId/:productId", deleteClientCartProductHandler);
// Delete all items in cart
cartsRouter.delete("/carts/:clientId", deleteClientCartAllProductsHandler);
