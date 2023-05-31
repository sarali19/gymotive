import { prisma } from "../prisma";

export async function getOrdersHandler(req, res) {
  const result = await prisma.orders.findMany({
    include: {
      product: true
    }
  });
  res.send(result);
}

export async function getOrdersByClientIdHandler(req, res) {
  const result = await prisma.orders.findMany({
    where: { clientId: req.params.clientId },
    include: {
      product: true
    }
  });
  if (result) {
    res.send(result);
  } else {
    res.status(500).send({ message: "Order not found" });
  }
}

export async function createOrdersHandler(req, res) {
  await prisma.orders.createMany({
    data: req.body,
  });

  res.send("Order created");
}
