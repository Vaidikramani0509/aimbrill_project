import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRoleNullableFilter } from "../inputs/NestedEnumRoleNullableFilter";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("EnumRoleNullableFilter", {})
export class EnumRoleNullableFilter {
    @TypeGraphQL.Field(_type => Role, {
            nullable: true
        })
    equals?: "MANAGER" | "DEVELOPER" | undefined;

    @TypeGraphQL.Field(_type => [Role], {
            nullable: true
        })
    in?: Array<"MANAGER" | "DEVELOPER"> | undefined;

    @TypeGraphQL.Field(_type => [Role], {
            nullable: true
        })
    notIn?: Array<"MANAGER" | "DEVELOPER"> | undefined;

    @TypeGraphQL.Field(_type => NestedEnumRoleNullableFilter, {
            nullable: true
        })
    not?: NestedEnumRoleNullableFilter | undefined;
}
