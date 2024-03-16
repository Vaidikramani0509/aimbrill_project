import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesWhereInput } from "../inputs/EmployeesWhereInput";
import { EnumEmpstatusFilter } from "../inputs/EnumEmpstatusFilter";
import { EnumRoleNullableFilter } from "../inputs/EnumRoleNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
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

    @TypeGraphQL.Field(_type => EnumEmpstatusFilter, {
            nullable: true
        })
    employeestatus?: EnumEmpstatusFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
            nullable: true
        })
    skills?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => IntFilter, {
            nullable: true
        })
    salarydetails?: IntFilter | undefined;

    @TypeGraphQL.Field(_type => StringNullableFilter, {
            nullable: true
        })
    address?: StringNullableFilter | undefined;

    @TypeGraphQL.Field(_type => EnumRoleNullableFilter, {
            nullable: true
        })
    role?: EnumRoleNullableFilter | undefined;
}
