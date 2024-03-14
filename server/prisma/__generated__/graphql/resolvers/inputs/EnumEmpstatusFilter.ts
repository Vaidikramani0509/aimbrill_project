import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumEmpstatusFilter } from "../inputs/NestedEnumEmpstatusFilter";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.InputType("EnumEmpstatusFilter", {})
export class EnumEmpstatusFilter {
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

    @TypeGraphQL.Field(_type => NestedEnumEmpstatusFilter, {
            nullable: true
        })
    not?: NestedEnumEmpstatusFilter | undefined;
}
