import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmployeesArgs } from "./args/AggregateEmployeesArgs";
import { Employees } from "../../../models/Employees";
import { AggregateEmployees } from "../../outputs/AggregateEmployees";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class AggregateEmployeesResolver {
    @TypeGraphQL.Query(_returns => AggregateEmployees, {
            nullable: false
        })
    async aggregateEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmployeesArgs): Promise<AggregateEmployees> {
         return getPrismaFromContext(ctx).employees.aggregate({
                      ...args,
                      ...transformInfoIntoPrismaArgs(info),
                    });
    }
}
