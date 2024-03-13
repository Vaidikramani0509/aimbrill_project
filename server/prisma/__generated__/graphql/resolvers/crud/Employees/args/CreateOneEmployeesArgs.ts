import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesCreateInput } from "../../../inputs/EmployeesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesCreateInput, {
            nullable: true
        })
    data?: EmployeesCreateInput | undefined;
}
