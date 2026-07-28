/*
  Warnings:

  - Added the required column `cropstageid` to the `plotsubstagevalue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plotsubstagevalue" ADD COLUMN     "cropstageid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "plotsubstagevalue" ADD CONSTRAINT "plotsubstagevalue_cropstageid_plotId_fkey" FOREIGN KEY ("cropstageid", "plotId") REFERENCES "plotstagevalue"("cropstageid", "plotId") ON DELETE CASCADE ON UPDATE CASCADE;
