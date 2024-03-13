import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmployeesOrThrowArgs } from "./args/FindUniqueEmployeesOrThrowArgs";
import { Employees } from "../../../models/Employees";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employees)
export class FindUniqueEmployeesOrThrowResolver {
    @TypeGraphQL.Query(_returns => Employees, {
            nullable: true
        })
    async findUniqueEmployeesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEmployeesOrThrowArgs): Promise<Employees | null> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.findUniqueOrThrow({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }
}
