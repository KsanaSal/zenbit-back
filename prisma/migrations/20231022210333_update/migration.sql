/*
  Warnings:

  - You are about to alter the column `yield` on the `Deals` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "Deals" ALTER COLUMN "yield" SET DATA TYPE DECIMAL(5,2);
