import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Empstatus } from "../../enums/Empstatus";

@TypeGraphQL.InputType("EnumEmpstatusFieldUpdateOperationsInput", {})
export class EnumEmpstatusFieldUpdateOperationsInput {
    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: true
        })
    set?: "ACTIVE" | "INACTIVE" | undefined;
}
