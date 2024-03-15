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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Employees: crudResolvers.EmployeesCrudResolver
};
const actionResolversMap = {
    Employees: {
        aggregateEmployees: actionResolvers.AggregateEmployeesResolver,
        createManyEmployees: actionResolvers.CreateManyEmployeesResolver,
        createOneEmployees: actionResolvers.CreateOneEmployeesResolver,
        deleteManyEmployees: actionResolvers.DeleteManyEmployeesResolver,
        deleteOneEmployees: actionResolvers.DeleteOneEmployeesResolver,
        findFirstEmployees: actionResolvers.FindFirstEmployeesResolver,
        findFirstEmployeesOrThrow: actionResolvers.FindFirstEmployeesOrThrowResolver,
        findManyEmployees: actionResolvers.FindManyEmployeesResolver,
        findUniqueEmployees: actionResolvers.FindUniqueEmployeesResolver,
        findUniqueEmployeesOrThrow: actionResolvers.FindUniqueEmployeesOrThrowResolver,
        groupByEmployees: actionResolvers.GroupByEmployeesResolver,
        updateManyEmployees: actionResolvers.UpdateManyEmployeesResolver,
        updateOneEmployees: actionResolvers.UpdateOneEmployeesResolver,
        upsertOneEmployees: actionResolvers.UpsertOneEmployeesResolver
    }
};
const crudResolversInfo = {
    Employees: ["aggregateEmployees", "createManyEmployees", "createOneEmployees", "deleteManyEmployees", "deleteOneEmployees", "findFirstEmployees", "findFirstEmployeesOrThrow", "findManyEmployees", "findUniqueEmployees", "findUniqueEmployeesOrThrow", "groupByEmployees", "updateManyEmployees", "updateOneEmployees", "upsertOneEmployees"]
};
const argsInfo = {
    AggregateEmployeesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyEmployeesArgs: ["data", "skipDuplicates"],
    CreateOneEmployeesArgs: ["data"],
    DeleteManyEmployeesArgs: ["where"],
    DeleteOneEmployeesArgs: ["where"],
    FindFirstEmployeesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstEmployeesOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEmployeesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueEmployeesArgs: ["where"],
    FindUniqueEmployeesOrThrowArgs: ["where"],
    GroupByEmployeesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyEmployeesArgs: ["data", "where"],
    UpdateOneEmployeesArgs: ["data", "where"],
    UpsertOneEmployeesArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Employees: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateEmployees: ["_count", "_avg", "_sum", "_min", "_max"],
    EmployeesGroupBy: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    EmployeesCountAggregate: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address", "_all"],
    EmployeesAvgAggregate: ["employeeid", "salarydetails"],
    EmployeesSumAggregate: ["employeeid", "salarydetails"],
    EmployeesMinAggregate: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesMaxAggregate: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    EmployeesWhereInput: ["AND", "OR", "NOT", "employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesOrderByWithRelationInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesWhereUniqueInput: ["employeeid", "AND", "OR", "NOT", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesOrderByWithAggregationInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address", "_count", "_avg", "_max", "_min", "_sum"],
    EmployeesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesCreateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesUpdateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesCreateManyInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesUpdateManyMutationInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumEmpstatusFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    SortOrderInput: ["sort", "nulls"],
    EmployeesCountOrderByAggregateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesAvgOrderByAggregateInput: ["employeeid", "salarydetails"],
    EmployeesMaxOrderByAggregateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesMinOrderByAggregateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
    EmployeesSumOrderByAggregateInput: ["employeeid", "salarydetails"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumEmpstatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumEmpstatusFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    StringFieldUpdateOperationsInput: ["set"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEmpstatusFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEmpstatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map