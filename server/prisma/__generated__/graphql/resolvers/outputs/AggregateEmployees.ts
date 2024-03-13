import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesAvgAggregate } from "../outputs/EmployeesAvgAggregate";
import { EmployeesCountAggregate } from "../outputs/EmployeesCountAggregate";
import { EmployeesMaxAggregate } from "../outputs/EmployeesMaxAggregate";
import { EmployeesMinAggregate } from "../outputs/EmployeesMinAggregate";
import { EmployeesSumAggregate } from "../outputs/EmployeesSumAggregate";

@TypeGraphQL.ObjectType("AggregateEmployees", {
        simpleResolvers: true
    })
export class AggregateEmployees {
    @TypeGraphQL.Field(_type => EmployeesCountAggregate, {
            nullable: true
        })
    _count!: EmployeesCountAggregate | null;

    @TypeGraphQL.Field(_type => EmployeesAvgAggregate, {
            nullable: true
        })
    _avg!: EmployeesAvgAggregate | null;

    @TypeGraphQL.Field(_type => EmployeesSumAggregate, {
            nullable: true
        })
    _sum!: EmployeesSumAggregate | null;

    @TypeGraphQL.Field(_type => EmployeesMinAggregate, {
            nullable: true
        })
    _min!: EmployeesMinAggregate | null;

    @TypeGraphQL.Field(_type => EmployeesMaxAggregate, {
            nullable: true
        })
    _max!: EmployeesMaxAggregate | null;
}
