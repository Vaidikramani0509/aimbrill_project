import * as TypeGraphQL from "type-graphql";

export enum EmployeesScalarFieldEnum {
    employeeid = "employeeid",
    employeename = "employeename",
    employeestatus = "employeestatus",
    skills = "skills",
    salarydetails = "salarydetails",
    address = "address",
    role = "role"
}
TypeGraphQL.registerEnumType(EmployeesScalarFieldEnum, {
      name: "EmployeesScalarFieldEnum",
      description: undefined,
    });
