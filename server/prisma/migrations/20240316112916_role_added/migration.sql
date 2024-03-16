/*
  Warnings:

  - You are about to drop the column `birthdate` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `joiningdate` on the `employees` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MANAGER', 'DEVELOPER');

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "birthdate",
DROP COLUMN "joiningdate",
ADD COLUMN     "role" "Role";
