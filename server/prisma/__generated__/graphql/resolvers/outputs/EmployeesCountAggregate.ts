import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EmployeesCountAggregate", {
        simpleResolvers: true
    })
export class EmployeesCountAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    employeeid!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    employeename!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    employeestatus!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    joiningdate!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    birthdate!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    skills!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    salarydetails!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    address!: number;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    _all!: number;
}
