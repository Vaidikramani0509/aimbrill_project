import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeesSumOrderByAggregateInput", {})
export class EmployeesSumOrderByAggregateInput {
    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    employeeid?: "asc" | "desc" | undefined;

    @TypeGraphQL.Field(_type => SortOrder, {
            nullable: true
        })
    salarydetails?: "asc" | "desc" | undefined;
}
