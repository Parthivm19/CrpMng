/*
  Warnings:

  - A unique constraint covering the columns `[plotId]` on the table `cropplottable` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "plotstagevalue" ALTER COLUMN "startdate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cropplottable_plotId_key" ON "cropplottable"("plotId");
