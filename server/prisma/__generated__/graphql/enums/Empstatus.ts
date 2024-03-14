import * as TypeGraphQL from "type-graphql";

export enum Empstatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
TypeGraphQL.registerEnumType(Empstatus, {
      name: "Empstatus",
      description: undefined,
    });
