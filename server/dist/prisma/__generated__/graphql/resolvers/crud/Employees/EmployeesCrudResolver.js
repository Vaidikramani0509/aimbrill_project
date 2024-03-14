"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateEmployeesArgs_1 = require("./args/AggregateEmployeesArgs");
const CreateManyEmployeesArgs_1 = require("./args/CreateManyEmployeesArgs");
const CreateOneEmployeesArgs_1 = require("./args/CreateOneEmployeesArgs");
const DeleteManyEmployeesArgs_1 = require("./args/DeleteManyEmployeesArgs");
const DeleteOneEmployeesArgs_1 = require("./args/DeleteOneEmployeesArgs");
const FindFirstEmployeesArgs_1 = require("./args/FindFirstEmployeesArgs");
const FindFirstEmployeesOrThrowArgs_1 = require("./args/FindFirstEmployeesOrThrowArgs");
const FindManyEmployeesArgs_1 = require("./args/FindManyEmployeesArgs");
const FindUniqueEmployeesArgs_1 = require("./args/FindUniqueEmployeesArgs");
const FindUniqueEmployeesOrThrowArgs_1 = require("./args/FindUniqueEmployeesOrThrowArgs");
const GroupByEmployeesArgs_1 = require("./args/GroupByEmployeesArgs");
const UpdateManyEmployeesArgs_1 = require("./args/UpdateManyEmployeesArgs");
const UpdateOneEmployeesArgs_1 = require("./args/UpdateOneEmployeesArgs");
const UpsertOneEmployeesArgs_1 = require("./args/UpsertOneEmployeesArgs");
const helpers_1 = require("../../../helpers");
const Employees_1 = require("../../../models/Employees");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEmployees_1 = require("../../outputs/AggregateEmployees");
const EmployeesGroupBy_1 = require("../../outputs/EmployeesGroupBy");
let EmployeesCrudResolver = class EmployeesCrudResolver {
    async aggregateEmployees(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformInfoIntoPrismaArgs)(info)));
    }
    async createManyEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async createOneEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteManyEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async deleteOneEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findFirstEmployeesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.findFirstOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findManyEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findUniqueEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async findUniqueEmployeesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.findUniqueOrThrow(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async groupByEmployees(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
    }
    async updateManyEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async updateOneEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
    async upsertOneEmployees(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).employees.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
    }
};
exports.EmployeesCrudResolver = EmployeesCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregateEmployees_1.AggregateEmployees, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateEmployeesArgs_1.AggregateEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "aggregateEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyEmployeesArgs_1.CreateManyEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "createManyEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Employees_1.Employees, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneEmployeesArgs_1.CreateOneEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "createOneEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyEmployeesArgs_1.DeleteManyEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "deleteManyEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Employees_1.Employees, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneEmployeesArgs_1.DeleteOneEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "deleteOneEmployees", null);
__decorate([
    TypeGraphQL.Query(_returns => Employees_1.Employees, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstEmployeesArgs_1.FindFirstEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "findFirstEmployees", null);
__decorate([
    TypeGraphQL.Query(_returns => Employees_1.Employees, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstEmployeesOrThrowArgs_1.FindFirstEmployeesOrThrowArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "findFirstEmployeesOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Employees_1.Employees], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyEmployeesArgs_1.FindManyEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "findManyEmployees", null);
__decorate([
    TypeGraphQL.Query(_returns => Employees_1.Employees, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueEmployeesArgs_1.FindUniqueEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "findUniqueEmployees", null);
__decorate([
    TypeGraphQL.Query(_returns => Employees_1.Employees, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueEmployeesOrThrowArgs_1.FindUniqueEmployeesOrThrowArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "findUniqueEmployeesOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [EmployeesGroupBy_1.EmployeesGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByEmployeesArgs_1.GroupByEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "groupByEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyEmployeesArgs_1.UpdateManyEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "updateManyEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Employees_1.Employees, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneEmployeesArgs_1.UpdateOneEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "updateOneEmployees", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Employees_1.Employees, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneEmployeesArgs_1.UpsertOneEmployeesArgs]),
    __metadata("design:returntype", Promise)
], EmployeesCrudResolver.prototype, "upsertOneEmployees", null);
exports.EmployeesCrudResolver = EmployeesCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Employees_1.Employees)
], EmployeesCrudResolver);
//# sourceMappingURL=EmployeesCrudResolver.js.map