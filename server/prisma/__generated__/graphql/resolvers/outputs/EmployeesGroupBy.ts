import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesAvgAggregate } from "../outputs/EmployeesAvgAggregate";
import { EmployeesCountAggregate } from "../outputs/EmployeesCountAggregate";
import { EmployeesMaxAggregate } from "../outputs/EmployeesMaxAggregate";
import { EmployeesMinAggregate } from "../outputs/EmployeesMinAggregate";
import { EmployeesSumAggregate } from "../outputs/EmployeesSumAggregate";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.ObjectType("EmployeesGroupBy", {
        simpleResolvers: true
    })
export class EmployeesGroupBy {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    employeeid!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename!: string | null;

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
    skills!: string[] | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
            nullable: false
        })
    salarydetails!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address!: string | null;

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
