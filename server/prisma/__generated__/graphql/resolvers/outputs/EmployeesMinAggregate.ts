import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.ObjectType("EmployeesMinAggregate", {
        simpleResolvers: true
    })
export class EmployeesMinAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    employeeid!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename!: string | null;

    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: true
        })
    employeestatus!: "ACTIVE" | "INACTIVE" | null;

    @TypeGraphQL.Field(_type => Date, {
            nullable: true
        })
    joiningdate!: Date | null;

    @TypeGraphQL.Field(_type => Date, {
            nullable: true
        })
    birthdate!: Date | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
            nullable: true
        })
    salarydetails!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address!: string | null;
}
