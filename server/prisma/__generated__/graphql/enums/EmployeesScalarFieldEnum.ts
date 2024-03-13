import * as TypeGraphQL from "type-graphql";

export enum EmployeesScalarFieldEnum {
    employeeid = "employeeid",
    employeename = "employeename",
    employeestatus = "employeestatus",
    joiningdate = "joiningdate",
    birthdate = "birthdate",
    skills = "skills",
    salarydetails = "salarydetails",
    address = "address"
}
TypeGraphQL.registerEnumType(EmployeesScalarFieldEnum, {
      name: "EmployeesScalarFieldEnum",
      description: undefined,
    });
