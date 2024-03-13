import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEmployeesOrThrowArgs } from "./args/FindFirstEmployeesOrThrowArgs";
import { Employees } from "../../../models/Employees";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class FindFirstEmployeesOrThrowResolver {
    @TypeGraphQL.Query(_returns => Employees, {
            nullable: true
        })
    async findFirstEmployeesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEmployeesOrThrowArgs): Promise<Employees | null> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.findFirstOrThrow({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }
}
