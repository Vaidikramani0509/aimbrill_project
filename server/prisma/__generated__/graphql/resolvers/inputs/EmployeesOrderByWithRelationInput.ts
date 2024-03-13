import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeesOrderByWithRelationInput", {})
export class EmployeesOrderByWithRelationInput {
    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    employeeid?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    employeename?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    employeestatus?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    joiningdate?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    birthdate?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    skills?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    salarydetails?: SortOrderInput | undefined;

    @TypeGraphQL.Field(_type => SortOrderInput, {
            nullable: true
        })
    address?: SortOrderInput | undefined;
}
