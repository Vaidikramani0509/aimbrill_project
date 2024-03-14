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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmployees = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EmployeesAvgAggregate_1 = require("../outputs/EmployeesAvgAggregate");
const EmployeesCountAggregate_1 = require("../outputs/EmployeesCountAggregate");
const EmployeesMaxAggregate_1 = require("../outputs/EmployeesMaxAggregate");
const EmployeesMinAggregate_1 = require("../outputs/EmployeesMinAggregate");
const EmployeesSumAggregate_1 = require("../outputs/EmployeesSumAggregate");
let AggregateEmployees = class AggregateEmployees {
};
exports.AggregateEmployees = AggregateEmployees;
__decorate([
    TypeGraphQL.Field(_type => EmployeesCountAggregate_1.EmployeesCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateEmployees.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => EmployeesAvgAggregate_1.EmployeesAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateEmployees.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => EmployeesSumAggregate_1.EmployeesSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateEmployees.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => EmployeesMinAggregate_1.EmployeesMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateEmployees.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => EmployeesMaxAggregate_1.EmployeesMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateEmployees.prototype, "_max", void 0);
exports.AggregateEmployees = AggregateEmployees = __decorate([
    TypeGraphQL.ObjectType("AggregateEmployees", {
        simpleResolvers: true
    })
], AggregateEmployees);
//# sourceMappingURL=AggregateEmployees.js.map