import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesWhereInput } from "../../../inputs/EmployeesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesWhereInput, {
            nullable: true
        })
    where?: EmployeesWhereInput | undefined;
}
