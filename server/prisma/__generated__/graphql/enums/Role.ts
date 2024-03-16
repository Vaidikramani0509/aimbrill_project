import * as TypeGraphQL from "type-graphql";

export enum Role {
    MANAGER = "MANAGER",
    DEVELOPER = "DEVELOPER"
}
TypeGraphQL.registerEnumType(Role, {
      name: "Role",
      description: undefined,
    });
