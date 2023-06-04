import { prisma } from "../prisma";

export async function getClientCartHandler(req, res) {
  const clientId = req.params.clientId;
  try {
    const result = await prisma.carts.findMany({
      where: {
        clientId: clientId,
      },
      include: {
        product: true,
      },
    });

    res.send(result);
  } catch (error) {
    res.status(500).send("Error fetching cart items");
  }
}

export async function addProductToClientCartHandler(req, res) {
  await prisma.carts.create({
    data: {
      clientId: req.params.clientId,
      productId: req.params.productId,
      quantity: req.body?.quantity || 1,
    },
  });
  res.send("Product added to cart");
}

export async function updateClientCartProductHandler(req, res) {
  const clientId = req.params.clientId;
  const productId = req.params.productId;
  const quantity = req.body.quantity;

  try {
    const cartItem = await prisma.carts.findFirst({
      where: {
        clientId: clientId,
        productId: productId,
      },
    });
    const result = await prisma.carts.update({
      where: {
        id: cartItem.id,
      },
      data: {
        quantity: quantity,
      },
    });

    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error updating item" });
  }
}

export async function deleteClientCartProductHandler(req, res) {
  const clientId = req.params.clientId;
  const productId = req.params.productId;

  try {
    const result = await prisma.carts.findFirst({
      where: {
        clientId: clientId,
        productId: productId,
      },
    });
    await prisma.carts.delete({
      where: {
        id: result.id,
      },
    });
    res.send("Cart item deleted");
  } catch (error) {
    res.status(500).send("Error deleting cart item");
  }
}
