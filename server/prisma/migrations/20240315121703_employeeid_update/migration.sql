/*
  Warnings:

  - A unique constraint covering the columns `[employeeid]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "employeeid" DROP DEFAULT;
DROP SEQUENCE "employees_employeeid_seq";

-- CreateIndex
CREATE UNIQUE INDEX "employees_employeeid_key" ON "employees"("employeeid");
