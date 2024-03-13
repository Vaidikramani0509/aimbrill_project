import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EmployeesAvgAggregate", {
        simpleResolvers: true
    })
export class EmployeesAvgAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
            nullable: true
        })
    employeeid!: number | null;

    @TypeGraphQL.Field(_type => DecimalJSScalar, {
            nullable: true
        })
    salarydetails!: Prisma.Decimal | null;
}
