import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesWhereUniqueInput } from "../../../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEmployeesOrThrowArgs {
    @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
            nullable: false
        })
    where!: EmployeesWhereUniqueInput;
}
