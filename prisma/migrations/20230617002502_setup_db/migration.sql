-- CreateEnum
CREATE TYPE "PeopleType" AS ENUM ('NP', 'LP');

-- CreateEnum
CREATE TYPE "PeopleGender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "AddressType" AS ENUM ('residential', 'commercial');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('Master', 'Admin', 'Site');

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "peopleId" INTEGER,
    "redencial_type" "AddressType" NOT NULL,
    "address" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "point_reference" TEXT,
    "complement" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "type" "PeopleType" NOT NULL,
    "gender" "PeopleGender",
    "itin" TEXT DEFAULT '',
    "cnpj" TEXT DEFAULT '',
    "birthday" TIMESTAMP(3),
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "people_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "type" "UserType" NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "people_email_key" ON "people"("email");

-- CreateIndex
CREATE UNIQUE INDEX "people_itin_key" ON "people"("itin");

-- CreateIndex
CREATE UNIQUE INDEX "people_cnpj_key" ON "people"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "people"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_people_id_fkey" FOREIGN KEY ("people_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
