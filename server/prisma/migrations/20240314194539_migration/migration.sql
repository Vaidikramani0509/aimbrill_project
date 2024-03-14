-- CreateEnum
CREATE TYPE "Empstatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "employees" (
    "employeeid" SERIAL NOT NULL,
    "employeename" VARCHAR(100),
    "employeestatus" "Empstatus" NOT NULL,
    "joiningdate" TIMESTAMP(3) NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "skills" TEXT[],
    "salarydetails" DOUBLE PRECISION NOT NULL,
    "address" TEXT,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employeeid")
);
