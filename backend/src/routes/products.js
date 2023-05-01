import express from "express";
import {
  createProductHandler,
  deleteProductHandler,
  getProductByIdHandler,
  getProductsHandler,
  updateProductHandler,
} from "../handlers/products";

export const productsRouter = express.Router();

// Get products (+ filters)
productsRouter.get("/products", getProductsHandler);
// Get product by id
productsRouter.get("/products/:id", getProductByIdHandler);
// Create product
productsRouter.post("/products", createProductHandler);
// Update product
productsRouter.put("/products/:id", updateProductHandler);
// Delete product
productsRouter.delete("/products/:id", deleteProductHandler);
