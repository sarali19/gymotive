import { prisma } from "../prisma";

export async function getOrdersHandler(req, res) {
  const result = await prisma.orders.findMany();
  res.send(result);
}

export async function getOrderByIdHandler(req, res) {
  const result = await prisma.orders.findUnique({ where: { id: req.params.id } });
  if (result) {
    res.send(result);
  } else {
    res.status(500).send({ message: "Order not found" });
  }
}

export async function createOrderHandler(req, res) {
  await prisma.orders.create({
    data: req.body,
  });

  res.send("Order created");
}
