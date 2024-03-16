import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("NullableEnumRoleFieldUpdateOperationsInput", {})
export class NullableEnumRoleFieldUpdateOperationsInput {
    @TypeGraphQL.Field(_type => Role, {
            nullable: true
        })
    set?: "MANAGER" | "DEVELOPER" | undefined;
}
