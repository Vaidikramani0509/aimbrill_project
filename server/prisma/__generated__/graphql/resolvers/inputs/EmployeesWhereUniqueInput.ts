import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { EmployeesWhereInput } from "../inputs/EmployeesWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EmployeesWhereUniqueInput", {})
export class EmployeesWhereUniqueInput {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    employeeid?: number | undefined;

    @TypeGraphQL.Field(_type => [EmployeesWhereInput], {
            nullable: true
        })
    AND?: EmployeesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [EmployeesWhereInput], {
            nullable: true
        })
    OR?: EmployeesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [EmployeesWhereInput], {
            nullable: true
        })
    NOT?: EmployeesWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
            nullable: true
        })
    employeename?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
            nullable: true
        })
    employeestatus?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
            nullable: true
        })
    joiningdate?: DateTimeNullableFilter | undefined;

    @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
            nullable: true
        })
    birthdate?: DateTimeNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
            nullable: true
        })
    skills?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => DecimalNullableFilter, {
            nullable: true
        })
    salarydetails?: DecimalNullableFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
            nullable: true
        })
    address?: StringNullableFilter | undefined;
}
