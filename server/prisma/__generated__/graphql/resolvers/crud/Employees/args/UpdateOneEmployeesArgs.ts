import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesUpdateInput } from "../../../inputs/EmployeesUpdateInput";
import { EmployeesWhereUniqueInput } from "../../../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesUpdateInput, {
            nullable: false
        })
    data!: EmployeesUpdateInput;

    @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
            nullable: false
        })
    where!: EmployeesWhereUniqueInput;
}
