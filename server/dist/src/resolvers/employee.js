"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeResolver = exports.BaseResponse = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
const Employee_1 = require("../entities/Employee");
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let BaseResponse = class BaseResponse {
};
exports.BaseResponse = BaseResponse;
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], BaseResponse.prototype, "errors", void 0);
exports.BaseResponse = BaseResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], BaseResponse);
let EmployeResponse = class EmployeResponse extends BaseResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => Employee_1.Employee, { nullable: true }),
    __metadata("design:type", Employee_1.Employee)
], EmployeResponse.prototype, "employee", void 0);
EmployeResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], EmployeResponse);
let updateEmployee = class updateEmployee {
};
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], updateEmployee.prototype, "name", void 0);
updateEmployee = __decorate([
    (0, type_graphql_1.InputType)()
], updateEmployee);
let EmployeeResolver = class EmployeeResolver {
    async users({ em }) {
        return em.find(Employee_1.Employee, {}, {
            orderBy: { joiningdate: "ASC" },
            populate: ["employeename"],
        });
    }
    async updateEmployee(id, updates, { em }) {
        if (!id) {
            return {
                errors: [{ field: "id", message: "Please provide a user id!" }],
            };
        }
        const employee = await em.findOne({ employeee });
        if (!user) {
            return {
                errors: [
                    { field: "username", message: "Please provide a valid username!" },
                ],
            };
        }
        (0, core_1.wrap)(user).assign(updates);
        await em.persistAndFlush(user);
        return { user };
    }
    async deleteUser(id, { em }) {
        try {
            const user = await em.findOne(User, { id });
            if (user) {
                await em.removeAndFlush(user);
                return true;
            }
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    }
};
exports.EmployeeResolver = EmployeeResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Employee_1.Employee]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => EmployeResponse),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("updates")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateEmployee, Object]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "updateEmployee", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "deleteUser", null);
exports.EmployeeResolver = EmployeeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], EmployeeResolver);
//# sourceMappingURL=employee.js.map