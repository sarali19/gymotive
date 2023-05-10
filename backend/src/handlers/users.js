import { prisma } from "../prisma";

export async function getUsersHandler(req, res) {
  const result = await prisma.users.findMany();
  res.send(result);
}

export async function getUserByIdHandler(req, res) {
    const result = await prisma.users.findUnique({ where: { id: req.params.id } });
    if (result) {
      res.send(result);
    } else {
      res.status(500).send({ message: "User not found" });
    }
  }
  
  export async function createUserHandler(req, res) {
    await prisma.users.create({
      data: req.body,
    });
  
    res.send("User created");
  }
  
  export async function updateUserHandler(req, res) {
    await prisma.users.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.send("User updated");
  }
  
  export async function deleteUserHandler(req, res) {
    await prisma.users.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send("User deleted");
  }
  

  