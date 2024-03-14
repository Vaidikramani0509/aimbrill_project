import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

      export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

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

      type ResolverModelNames = keyof typeof crudResolversMap;

      type ModelResolverActionNames<
        TModel extends ResolverModelNames
        > = keyof typeof crudResolversMap[TModel]["prototype"];

      export type ResolverActionsConfig<
        TModel extends ResolverModelNames
      > = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
        & {
          _all?: MethodDecorator[];
          _query?: MethodDecorator[];
          _mutation?: MethodDecorator[];
        };

      export type ResolversEnhanceMap = {
        [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
      };

      export function applyResolversEnhanceMap(
        resolversEnhanceMap: ResolversEnhanceMap,
      ) {
        const mutationOperationPrefixes = [
          "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
        ];
        for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
          const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
          const crudTarget = crudResolversMap[modelName].prototype;
          const resolverActionsConfig = resolversEnhanceMap[modelName]!;
          const actionResolversConfig = actionResolversMap[modelName];
          const allActionsDecorators = resolverActionsConfig._all;
          const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
          for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[
              resolverActionName as keyof typeof resolverActionsConfig
            ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
              ...allActionsDecorators ?? [],
              ...operationKindDecorators ?? [],
            ]
            let decorators: MethodDecorator[];
            if (typeof maybeDecoratorsOrFn === "function") {
              decorators = maybeDecoratorsOrFn(mainDecorators);
            } else {
              decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = (actionResolversConfig[
              resolverActionName as keyof typeof actionResolversConfig
            ] as Function).prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
          }
        }
      }

      type ArgsTypesNames = keyof typeof argsTypes;

      type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
        keyof typeof argsTypes[TArgsType]["prototype"],
        number | symbol
      >;

      type ArgFieldsConfig<
        TArgsType extends ArgsTypesNames
      > = FieldsConfig<ArgFieldNames<TArgsType>>;

      export type ArgConfig<TArgsType extends ArgsTypesNames> = {
        class?: ClassDecorator[];
        fields?: ArgFieldsConfig<TArgsType>;
      };

      export type ArgsTypesEnhanceMap = {
        [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
      };

      export function applyArgsTypesEnhanceMap(
        argsTypesEnhanceMap: ArgsTypesEnhanceMap,
      ) {
        for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
          const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
          const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
          const typeClass = argsTypes[argsTypeName];
          const typeTarget = typeClass.prototype;
          applyTypeClassEnhanceConfig(
            typeConfig,
            typeClass,
            typeTarget,
            argsInfo[argsTypeName as keyof typeof argsInfo],
          );
        }
      }

      type TypeConfig = {
        class?: ClassDecorator[];
        fields?: FieldsConfig;
      };

      export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

      type FieldsConfig<TTypeKeys extends string = string> = Partial<
        Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
      > & { _all?: PropertyDecorator[] };

      function applyTypeClassEnhanceConfig<
        TEnhanceConfig extends TypeConfig,
        TType extends object
      >(
        enhanceConfig: TEnhanceConfig,
        typeClass: ClassType<TType>,
        typePrototype: TType,
        typeFieldNames: string[]
      ) {
        if (enhanceConfig.class) {
          tslib.__decorate(enhanceConfig.class, typeClass);
        }
        if (enhanceConfig.fields) {
          const allFieldsDecorators = enhanceConfig.fields._all ?? [];
          for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[
              typeFieldName
            ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
            let decorators: PropertyDecorator[];
            if (typeof maybeDecoratorsOrFn === "function") {
              decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            } else {
              decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
          }
        }
      }

const modelsInfo = {
        Employees: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"]
    };

      type ModelNames = keyof typeof models;

      type ModelFieldNames<TModel extends ModelNames> = Exclude<
        keyof typeof models[TModel]["prototype"],
        number | symbol
      >;

      type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
        ModelFieldNames<TModel>
      >;

      export type ModelConfig<TModel extends ModelNames> = {
        class?: ClassDecorator[];
        fields?: ModelFieldsConfig<TModel>;
      };

      export type ModelsEnhanceMap = {
        [TModel in ModelNames]?: ModelConfig<TModel>;
      };

      export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
        for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
          const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
          const modelConfig = modelsEnhanceMap[modelName]!;
          const modelClass = models[modelName];
          const modelTarget = modelClass.prototype;
          applyTypeClassEnhanceConfig(
            modelConfig,
            modelClass,
            modelTarget,
            modelsInfo[modelName as keyof typeof modelsInfo],
          );
        }
      }

const outputsInfo = {
        AggregateEmployees: ["_count", "_avg", "_sum", "_min", "_max"],
        EmployeesGroupBy: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address", "_count", "_avg", "_sum", "_min", "_max"],
        AffectedRowsOutput: ["count"],
        EmployeesCountAggregate: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address", "_all"],
        EmployeesAvgAggregate: ["employeeid", "salarydetails"],
        EmployeesSumAggregate: ["employeeid", "salarydetails"],
        EmployeesMinAggregate: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "salarydetails", "address"],
        EmployeesMaxAggregate: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "salarydetails", "address"]
    };

      type OutputTypesNames = keyof typeof outputTypes;

      type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
        keyof typeof outputTypes[TOutput]["prototype"],
        number | symbol
      >;

      type OutputTypeFieldsConfig<
        TOutput extends OutputTypesNames
      > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

      export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
        class?: ClassDecorator[];
        fields?: OutputTypeFieldsConfig<TOutput>;
      };

      export type OutputTypesEnhanceMap = {
        [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
      };

      export function applyOutputTypesEnhanceMap(
        outputTypesEnhanceMap: OutputTypesEnhanceMap,
      ) {
        for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
          const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
          const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
          const typeClass = outputTypes[outputTypeName];
          const typeTarget = typeClass.prototype;
          applyTypeClassEnhanceConfig(
            typeConfig,
            typeClass,
            typeTarget,
            outputsInfo[outputTypeName as keyof typeof outputsInfo],
          );
        }
      }

const inputsInfo = {
        EmployeesWhereInput: ["AND", "OR", "NOT", "employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesOrderByWithRelationInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesWhereUniqueInput: ["employeeid", "AND", "OR", "NOT", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesOrderByWithAggregationInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address", "_count", "_avg", "_max", "_min", "_sum"],
        EmployeesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesCreateInput: ["employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesUpdateInput: ["employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesCreateManyInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesUpdateManyMutationInput: ["employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
        EnumEmpstatusFilter: ["equals", "in", "notIn", "not"],
        DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
        FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        SortOrderInput: ["sort", "nulls"],
        EmployeesCountOrderByAggregateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "skills", "salarydetails", "address"],
        EmployeesAvgOrderByAggregateInput: ["employeeid", "salarydetails"],
        EmployeesMaxOrderByAggregateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "salarydetails", "address"],
        EmployeesMinOrderByAggregateInput: ["employeeid", "employeename", "employeestatus", "joiningdate", "birthdate", "salarydetails", "address"],
        EmployeesSumOrderByAggregateInput: ["employeeid", "salarydetails"],
        IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
        StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
        EnumEmpstatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
        DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
        FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
        EmployeesCreateskillsInput: ["set"],
        NullableStringFieldUpdateOperationsInput: ["set"],
        EnumEmpstatusFieldUpdateOperationsInput: ["set"],
        DateTimeFieldUpdateOperationsInput: ["set"],
        EmployeesUpdateskillsInput: ["set", "push"],
        FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
        IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
        NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
        NestedEnumEmpstatusFilter: ["equals", "in", "notIn", "not"],
        NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
        NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
        NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
        NestedEnumEmpstatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
        NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
        NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"]
    };

      type InputTypesNames = keyof typeof inputTypes;

      type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
        keyof typeof inputTypes[TInput]["prototype"],
        number | symbol
      >;

      type InputTypeFieldsConfig<
        TInput extends InputTypesNames
      > = FieldsConfig<InputTypeFieldNames<TInput>>;

      export type InputTypeConfig<TInput extends InputTypesNames> = {
        class?: ClassDecorator[];
        fields?: InputTypeFieldsConfig<TInput>;
      };

      export type InputTypesEnhanceMap = {
        [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
      };

      export function applyInputTypesEnhanceMap(
        inputTypesEnhanceMap: InputTypesEnhanceMap,
      ) {
        for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
          const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
          const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
          const typeClass = inputTypes[inputTypeName];
          const typeTarget = typeClass.prototype;
          applyTypeClassEnhanceConfig(
            typeConfig,
            typeClass,
            typeTarget,
            inputsInfo[inputTypeName as keyof typeof inputsInfo],
          );
        }
      }
    
