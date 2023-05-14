import { prisma } from "../prisma";

export async function getUsersHandler(req, res) {
  const table = req.query.isAdmin === "true" ? prisma.admins : prisma.clients;
  const result = await table.findMany();
  res.send(result);
}

export async function getUserByIdHandler(req, res) {
  const table = req.query.isAdmin === "true" ? prisma.admins : prisma.clients;
  const result = await table.findUnique({ where: { id: req.params.id } });
  if (result) {
    res.send(result);
  } else {
    res.status(500).send({ message: "User not found" });
  }
}

export async function signupHandler(req, res) {
  const table = req.query.isAdmin === "true" ? prisma.admins : prisma.clients;
  const user = await table.findFirst({
    where: {
      email: req.body.email
    }
  })

  if (user) {
    res.status(400).send("An account with this email already exists")
  }
  else {
    await table.create({
      data: req.body,
    });

    res.send("User created");
  }
}

export async function signinHandler(req, res) {
  const table = req.query.isAdmin === "true" ? prisma.admins : prisma.clients;
  const user = await table.findFirst({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    res.status(400).send("Invalid email or password")
  }
  else {
    if (user.password !== req.body.password) {
      res.status(400).send("Invalid email or password")
    }
    else {
      res.send(user)
    }
  }
}

export async function updateUserHandler(req, res) {
  const table = req.query.isAdmin === "true" ? prisma.admins : prisma.clients;
  await table.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.send("User updated");
}

export async function deleteUserHandler(req, res) {
  const table = req.query.isAdmin === "true" ? prisma.admins : prisma.clients;
  await table.delete({
    where: {
      id: req.params.id,
    },
  });
  res.send("User deleted");
}


