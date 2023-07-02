/*
  Warnings:

  - You are about to drop the column `postal_code` on the `address` table. All the data in the column will be lost.
  - Added the required column `zip_code` to the `address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "postal_code",
ADD COLUMN     "zip_code" TEXT NOT NULL;
