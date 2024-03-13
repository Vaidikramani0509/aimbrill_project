import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesOrderByWithAggregationInput } from "../../../inputs/EmployeesOrderByWithAggregationInput";
import { EmployeesScalarWhereWithAggregatesInput } from "../../../inputs/EmployeesScalarWhereWithAggregatesInput";
import { EmployeesWhereInput } from "../../../inputs/EmployeesWhereInput";
import { EmployeesScalarFieldEnum } from "../../../../enums/EmployeesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmployeesArgs {
    @TypeGraphQL.Field(_type => EmployeesWhereInput, {
            nullable: true
        })
    where?: EmployeesWhereInput | undefined;

    @TypeGraphQL.Field(_type => [EmployeesOrderByWithAggregationInput], {
            nullable: true
        })
    orderBy?: EmployeesOrderByWithAggregationInput[] | undefined;

    @TypeGraphQL.Field(_type => [EmployeesScalarFieldEnum], {
            nullable: false
        })
    by!: Array<"employeeid" | "employeename" | "employeestatus" | "joiningdate" | "birthdate" | "skills" | "salarydetails" | "address">;

    @TypeGraphQL.Field(_type => EmployeesScalarWhereWithAggregatesInput, {
            nullable: true
        })
    having?: EmployeesScalarWhereWithAggregatesInput | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    take?: number | undefined;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    skip?: number | undefined;
}
