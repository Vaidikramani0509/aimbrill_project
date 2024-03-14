import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEmpstatusWithAggregatesFilter } from "../inputs/EnumEmpstatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
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

    @TypeGraphQL.Field(_type => EnumEmpstatusWithAggregatesFilter, {
            nullable: true
        })
    employeestatus?: EnumEmpstatusWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
            nullable: true
        })
    joiningdate?: DateTimeWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
            nullable: true
        })
    birthdate?: DateTimeWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableListFilter, {
            nullable: true
        })
    skills?: StringNullableListFilter | undefined;

    @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
            nullable: true
        })
    salarydetails?: IntWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
            nullable: true
        })
    address?: StringNullableWithAggregatesFilter | undefined;
}
