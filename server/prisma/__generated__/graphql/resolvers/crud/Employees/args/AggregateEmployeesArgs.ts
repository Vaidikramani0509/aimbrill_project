import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesOrderByWithRelationInput } from "../../../inputs/EmployeesOrderByWithRelationInput";
import { EmployeesWhereInput } from "../../../inputs/EmployeesWhereInput";
import { EmployeesWhereUniqueInput } from "../../../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesWhereInput, {
            nullable: true
        })
    where?: EmployeesWhereInput | undefined;

    @TypeGraphQL.Field(_type => [EmployeesOrderByWithRelationInput], {
            nullable: true
        })
    orderBy?: EmployeesOrderByWithRelationInput[] | undefined;

    @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
            nullable: true
        })
    cursor?: EmployeesWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    take?: number | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    skip?: number | undefined;
}
