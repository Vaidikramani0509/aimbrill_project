/*
  Warnings:

  - The `joiningdate` column on the `employees` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `birthdate` column on the `employees` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "joiningdate",
ADD COLUMN     "joiningdate" TIMESTAMP(3),
DROP COLUMN "birthdate",
ADD COLUMN     "birthdate" TIMESTAMP(3);
