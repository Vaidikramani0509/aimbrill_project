-- CreateTable
CREATE TABLE "employees" (
    "employeeid" SERIAL NOT NULL,
    "employeename" VARCHAR(100),
    "employeestatus" VARCHAR(50),
    "joiningdate" DATE,
    "birthdate" DATE,
    "skills" TEXT,
    "salarydetails" DECIMAL(10,2),
    "address" TEXT,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employeeid")
);
