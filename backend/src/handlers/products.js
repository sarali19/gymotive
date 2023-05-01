import { prisma } from "../prisma";

export async function getProductsHandler(req, res) {
  const result = await prisma.products.findMany({
    where: {
      category: req.query.category,
      price: {
        lte: req.query.priceMax ? parseFloat(req.query.priceMax) : undefined,
        gte: req.query.priceMin ? parseFloat(req.query.priceMin) : undefined,
      },
      color: req.query.color,
      brand: req.query.brand,
      onSale: req.query.onSale ? req.query.onSale == "true" : undefined,
    },
  });
  res.send(result);
}

export async function getProductByIdHandler(req, res) {
  const result = await prisma.products.findUnique({ where: { id: req.params.id } });
  if (result) {
    res.send(result);
  } else {
    res.status(500).send({ message: "Product not found" });
  }
}

export async function createProductHandler(req, res) {
  await prisma.products.create({
    data: req.body,
  });

  res.send("Product created");
}

export async function updateProductHandler(req, res) {
  await prisma.products.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.send("Product updated");
}

export async function deleteProductHandler(req, res) {
  await prisma.products.delete({
    where: {
      id: req.params.id,
    },
  });
  res.send("Product deleted");
}
