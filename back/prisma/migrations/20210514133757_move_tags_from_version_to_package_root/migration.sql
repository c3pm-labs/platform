/*
  Warnings:

  - You are about to drop the column `tags` on the `Version` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "Version" DROP COLUMN "tags";
