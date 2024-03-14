import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEmpstatusFilter } from "../inputs/NestedEnumEmpstatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.InputType("NestedEnumEmpstatusWithAggregatesFilter", {})
export class NestedEnumEmpstatusWithAggregatesFilter {
    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: true
        })
    equals?: "ACTIVE" | "INACTIVE" | undefined;

    @TypeGraphQL.Field(_type => [Empstatus], {
            nullable: true
        })
    in?: Array<"ACTIVE" | "INACTIVE"> | undefined;

    @TypeGraphQL.Field(_type => [Empstatus], {
            nullable: true
        })
    notIn?: Array<"ACTIVE" | "INACTIVE"> | undefined;

    @TypeGraphQL.Field(_type => NestedEnumEmpstatusWithAggregatesFilter, {
            nullable: true
        })
    not?: NestedEnumEmpstatusWithAggregatesFilter | undefined;

    @TypeGraphQL.Field(_type => NestedIntFilter, {
            nullable: true
        })
    _count?: NestedIntFilter | undefined;

    @TypeGraphQL.Field(_type => NestedEnumEmpstatusFilter, {
            nullable: true
        })
    _min?: NestedEnumEmpstatusFilter | undefined;

    @TypeGraphQL.Field(_type => NestedEnumEmpstatusFilter, {
            nullable: true
        })
    _max?: NestedEnumEmpstatusFilter | undefined;
}
