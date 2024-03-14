import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EmployeesSumAggregate", {
        simpleResolvers: true
    })
export class EmployeesSumAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    employeeid!: number | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
            nullable: true
        })
    salarydetails!: number | null;
}
