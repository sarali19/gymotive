-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");
