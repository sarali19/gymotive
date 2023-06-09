import express, { json } from "express";
import { productsRouter } from "./routes/products";
import { ordersRouter } from "./routes/orders";
import { usersRouter } from "./routes/users";
import { cartsRouter } from "./routes/carts";

const app = express();

app.use(json({ limit: "5mb" }));

app.use((request, response, next) => {
  // Allowed sources and headers
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  return next();
});

app.use(productsRouter);
app.use(ordersRouter);
app.use(usersRouter);
app.use(cartsRouter);

app.listen(8000, () => {
  console.log("Server started at http://localhost:8000");
});
