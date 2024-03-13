import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("EmployeesScalarWhereWithAggregatesInput", {})
export class EmployeesScalarWhereWithAggregatesInput {
    @TypeGraphQL.Field(_type => [EmployeesScalarWhereWithAggregatesInput], {
            nullable: true
        })
    AND?: EmployeesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [EmployeesScalarWhereWithAggregatesInput], {
            nullable: true
        })
    OR?: EmployeesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => [EmployeesScalarWhereWithAggregatesInput], {
            nullable: true
        })
    NOT?: EmployeesScalarWhereWithAggregatesInput[] | undefined;

    @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
            nullable: true
        })
    employeeid?: IntWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
            nullable: true
        })
    employeename?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
            nullable: true
        })
    employeestatus?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
            nullable: true
        })
    joiningdate?: DateTimeNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
            nullable: true
        })
    birthdate?: DateTimeNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
            nullable: true
        })
    skills?: StringNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DecimalNullableWithAggregatesFilter, {
            nullable: true
        })
    salarydetails?: DecimalNullableWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
            nullable: true
        })
    address?: StringNullableWithAggregatesFilter | undefined;
}
