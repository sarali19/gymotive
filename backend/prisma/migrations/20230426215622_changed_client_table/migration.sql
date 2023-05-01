/*
  Warnings:

  - You are about to drop the column `adress` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Clients` table. All the data in the column will be lost.
  - You are about to drop the column `signedInAt` on the `Clients` table. All the data in the column will be lost.
  - Added the required column `address` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "adress",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "signedInAt",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
