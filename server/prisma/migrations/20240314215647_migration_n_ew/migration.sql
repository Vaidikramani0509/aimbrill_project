/*
  Warnings:

  - You are about to alter the column `salarydetails` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "salarydetails" SET DATA TYPE INTEGER;
