import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.InputType("EmployeesUpdateInput", {})
export class EmployeesUpdateInput {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    employeeid?: number | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename?: string | undefined;

    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: true
        })
    employeestatus?: "ACTIVE" | "INACTIVE" | undefined;

    @TypeGraphQL.Field(_type => Date, {
            nullable: true
        })
    joiningdate?: Date | undefined;

    @TypeGraphQL.Field(_type => Date, {
            nullable: true
        })
    birthdate?: Date | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    skills?: string | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    salarydetails?: number | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address?: string | undefined;
}
