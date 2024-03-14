import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.InputType("EmployeesCreateInput", {})
export class EmployeesCreateInput {
    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename?: string | undefined;

    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: false
        })
    employeestatus!: "ACTIVE" | "INACTIVE";

    @TypeGraphQL.Field(_type => Date, {
            nullable: false
        })
    joiningdate!: Date;

    @TypeGraphQL.Field(_type => Date, {
            nullable: false
        })
    birthdate!: Date;

    @TypeGraphQL.Field(_type => [String], {
            nullable: true
        })
    skills?: string[] | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
            nullable: false
        })
    salarydetails!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address?: string | undefined;
}
