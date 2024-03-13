import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesUpdateManyMutationInput } from "../../../inputs/EmployeesUpdateManyMutationInput";
import { EmployeesWhereInput } from "../../../inputs/EmployeesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesUpdateManyMutationInput, {
            nullable: false
        })
    data!: EmployeesUpdateManyMutationInput;

    @TypeGraphQL.Field(_type => EmployeesWhereInput, {
            nullable: true
        })
    where?: EmployeesWhereInput | undefined;
}
