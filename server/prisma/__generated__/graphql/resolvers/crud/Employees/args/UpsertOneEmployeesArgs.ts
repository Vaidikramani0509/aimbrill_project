import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesCreateInput } from "../../../inputs/EmployeesCreateInput";
import { EmployeesUpdateInput } from "../../../inputs/EmployeesUpdateInput";
import { EmployeesWhereUniqueInput } from "../../../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
            nullable: false
        })
    where!: EmployeesWhereUniqueInput;

    @TypeGraphQL.Field(_type => EmployeesCreateInput, {
            nullable: false
        })
    create!: EmployeesCreateInput;

    @TypeGraphQL.Field(_type => EmployeesUpdateInput, {
            nullable: false
        })
    update!: EmployeesUpdateInput;
}
