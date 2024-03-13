import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEmployeesArgs } from "./args/GroupByEmployeesArgs";
import { Employees } from "../../../models/Employees";
import { EmployeesGroupBy } from "../../outputs/EmployeesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class GroupByEmployeesResolver {
    @TypeGraphQL.Query(_returns => [EmployeesGroupBy], {
            nullable: false
        })
    async groupByEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEmployeesArgs): Promise<EmployeesGroupBy[]> {
         const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
         return getPrismaFromContext(ctx).employees.groupBy({
                      ...args,
                      ...Object.fromEntries(
                        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
                      ),
                    });
    }
}
