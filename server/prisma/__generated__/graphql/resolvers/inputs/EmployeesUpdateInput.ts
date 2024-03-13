import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EmployeesUpdateInput", {})
export class EmployeesUpdateInput {
    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename?: string | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeestatus?: string | undefined;

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

    @TypeGraphQL.Field(_type => DecimalJSScalar, {
            nullable: true
        })
    salarydetails?: Prisma.Decimal | undefined;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address?: string | undefined;
}
