/*
  Warnings:

  - You are about to drop the column `endDate` on the `cropstages` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `cropstages` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PlotStatus" AS ENUM ('Active', 'Fallow');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Current', 'Finished');

-- AlterTable
ALTER TABLE "cropstages" DROP COLUMN "endDate",
DROP COLUMN "startedAt";

-- AlterTable
ALTER TABLE "plot" ADD COLUMN     "status" "PlotStatus" NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "plotsubstagevalue" ADD COLUMN     "enddate" TIMESTAMP(3),
ADD COLUMN     "startdate" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "plotstagevalue" (
    "cropstageid" INTEGER NOT NULL,
    "plotId" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "startdate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plotstagevalue_pkey" PRIMARY KEY ("cropstageid","plotId")
);

-- CreateTable
CREATE TABLE "plotweatherData" (
    "plotweatherid" SERIAL NOT NULL,
    "plotId" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "datetime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plotweatherData_pkey" PRIMARY KEY ("plotweatherid")
);

-- AddForeignKey
ALTER TABLE "plotstagevalue" ADD CONSTRAINT "plotstagevalue_cropstageid_fkey" FOREIGN KEY ("cropstageid") REFERENCES "cropstages"("sid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plotstagevalue" ADD CONSTRAINT "plotstagevalue_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "plot"("plotId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plotweatherData" ADD CONSTRAINT "plotweatherData_plotId_fkey" FOREIGN KEY ("plotId") REFERENCES "plot"("plotId") ON DELETE CASCADE ON UPDATE CASCADE;
