import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesAvgOrderByAggregateInput } from "../inputs/EmployeesAvgOrderByAggregateInput";
import { EmployeesCountOrderByAggregateInput } from "../inputs/EmployeesCountOrderByAggregateInput";
import { EmployeesMaxOrderByAggregateInput } from "../inputs/EmployeesMaxOrderByAggregateInput";
import { EmployeesMinOrderByAggregateInput } from "../inputs/EmployeesMinOrderByAggregateInput";
import { EmployeesSumOrderByAggregateInput } from "../inputs/EmployeesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeesOrderByWithAggregationInput", {})
export class EmployeesOrderByWithAggregationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    employeeid?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    employeename?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    employeestatus?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    skills?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    salarydetails?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    address?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    role?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => EmployeesCountOrderByAggregateInput, {
            nullable: true
        })
    _count?: EmployeesCountOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => EmployeesAvgOrderByAggregateInput, {
            nullable: true
        })
    _avg?: EmployeesAvgOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => EmployeesMaxOrderByAggregateInput, {
            nullable: true
        })
    _max?: EmployeesMaxOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => EmployeesMinOrderByAggregateInput, {
            nullable: true
        })
    _min?: EmployeesMinOrderByAggregateInput | undefined;

    @TypeGraphQL.Field(_type => EmployeesSumOrderByAggregateInput, {
            nullable: true
        })
    _sum?: EmployeesSumOrderByAggregateInput | undefined;
}
