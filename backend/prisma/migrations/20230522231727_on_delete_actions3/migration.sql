-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_productId_fkey";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
