/*
  Warnings:

  - You are about to drop the column `id` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Orders_id_key";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "id",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("clientId", "productId");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
