/*
  Warnings:

  - You are about to drop the column `createAt` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `peopleId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `update_at` to the `people` table without a default value. This is not possible if the table is not empty.
  - Added the required column `people_id` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_peopleId_fkey";

-- AlterTable
ALTER TABLE "people" DROP COLUMN "createAt",
DROP COLUMN "updateAt",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "createAt",
DROP COLUMN "peopleId",
DROP COLUMN "updateAt",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "people_id" INTEGER NOT NULL,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "peopleId" INTEGER,
    "postal_code" TEXT NOT NULL,
    "complement" TEXT,
    "address" TEXT,
    "neighborhood" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "people"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_people_id_fkey" FOREIGN KEY ("people_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
