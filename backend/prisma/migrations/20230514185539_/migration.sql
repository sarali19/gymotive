/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Clients" ALTER COLUMN "address" DROP NOT NULL;

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "Admins" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Admins_id_key" ON "Admins"("id");
