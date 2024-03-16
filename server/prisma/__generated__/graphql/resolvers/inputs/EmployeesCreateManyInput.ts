import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Empstatus } from "../../enums/Empstatus";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("EmployeesCreateManyInput", {})
export class EmployeesCreateManyInput {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    employeeid!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename?: string | undefined;

    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: false
        })
    employeestatus!: "ACTIVE" | "INACTIVE";

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    skills!: string;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    salarydetails!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address?: string | undefined;

    @TypeGraphQL.Field(_type => Role, {
            nullable: true
        })
    role?: "MANAGER" | "DEVELOPER" | undefined;
}
