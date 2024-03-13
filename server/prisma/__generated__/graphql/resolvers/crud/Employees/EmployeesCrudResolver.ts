import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEmployeesArgs } from "./args/AggregateEmployeesArgs";
import { CreateManyEmployeesArgs } from "./args/CreateManyEmployeesArgs";
import { CreateOneEmployeesArgs } from "./args/CreateOneEmployeesArgs";
import { DeleteManyEmployeesArgs } from "./args/DeleteManyEmployeesArgs";
import { DeleteOneEmployeesArgs } from "./args/DeleteOneEmployeesArgs";
import { FindFirstEmployeesArgs } from "./args/FindFirstEmployeesArgs";
import { FindFirstEmployeesOrThrowArgs } from "./args/FindFirstEmployeesOrThrowArgs";
import { FindManyEmployeesArgs } from "./args/FindManyEmployeesArgs";
import { FindUniqueEmployeesArgs } from "./args/FindUniqueEmployeesArgs";
import { FindUniqueEmployeesOrThrowArgs } from "./args/FindUniqueEmployeesOrThrowArgs";
import { GroupByEmployeesArgs } from "./args/GroupByEmployeesArgs";
import { UpdateManyEmployeesArgs } from "./args/UpdateManyEmployeesArgs";
import { UpdateOneEmployeesArgs } from "./args/UpdateOneEmployeesArgs";
import { UpsertOneEmployeesArgs } from "./args/UpsertOneEmployeesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Employees } from "../../../models/Employees";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEmployees } from "../../outputs/AggregateEmployees";
import { EmployeesGroupBy } from "../../outputs/EmployeesGroupBy";

@TypeGraphQL.Resolver(_of => Employees)
export class EmployeesCrudResolver {
    @TypeGraphQL.Query(_returns => AggregateEmployees, {
            nullable: false
        })
    async aggregateEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEmployeesArgs): Promise<AggregateEmployees> {
         return getPrismaFromContext(ctx).employees.aggregate({
                      ...args,
                      ...transformInfoIntoPrismaArgs(info),
                    });
    }

    @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
            nullable: false
        })
    async createManyEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEmployeesArgs): Promise<AffectedRowsOutput> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.createMany({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Mutation(_returns => Employees, {
            nullable: false
        })
    async createOneEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEmployeesArgs): Promise<Employees> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.create({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
            nullable: false
        })
    async deleteManyEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEmployeesArgs): Promise<AffectedRowsOutput> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.deleteMany({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Mutation(_returns => Employees, {
            nullable: true
        })
    async deleteOneEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEmployeesArgs): Promise<Employees | null> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.delete({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Query(_returns => Employees, {
            nullable: true
        })
    async findFirstEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEmployeesArgs): Promise<Employees | null> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.findFirst({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

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

    @TypeGraphQL.Query(_returns => [Employees], {
            nullable: false
        })
    async findManyEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEmployeesArgs): Promise<Employees[]> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.findMany({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Query(_returns => Employees, {
            nullable: true
        })
    async findUniqueEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEmployeesArgs): Promise<Employees | null> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.findUnique({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

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

    @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
            nullable: false
        })
    async updateManyEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEmployeesArgs): Promise<AffectedRowsOutput> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.updateMany({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Mutation(_returns => Employees, {
            nullable: true
        })
    async updateOneEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEmployeesArgs): Promise<Employees | null> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.update({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }

    @TypeGraphQL.Mutation(_returns => Employees, {
            nullable: false
        })
    async upsertOneEmployees(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEmployeesArgs): Promise<Employees> {
         const { _count } = transformInfoIntoPrismaArgs(info);
                    return getPrismaFromContext(ctx).employees.upsert({
                      ...args,
                      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
                    });
    }
}
