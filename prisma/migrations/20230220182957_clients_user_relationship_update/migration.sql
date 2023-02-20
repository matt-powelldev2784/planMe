/*
  Warnings:

  - You are about to drop the column `email_id` on the `Clients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Clients` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `user_id` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_email_id_fkey";

-- DropIndex
DROP INDEX "Clients_email_id_key";

-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "email_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "Clients_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_user_id_key" ON "Clients"("user_id");

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
