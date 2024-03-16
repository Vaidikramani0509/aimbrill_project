/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateEmployees = {
  __typename?: 'AggregateEmployees';
  _avg?: Maybe<EmployeesAvgAggregate>;
  _count?: Maybe<EmployeesCountAggregate>;
  _max?: Maybe<EmployeesMaxAggregate>;
  _min?: Maybe<EmployeesMinAggregate>;
  _sum?: Maybe<EmployeesSumAggregate>;
};

export type Employees = {
  __typename?: 'Employees';
  address?: Maybe<Scalars['String']['output']>;
  employeeid: Scalars['Int']['output'];
  employeename?: Maybe<Scalars['String']['output']>;
  employeestatus: Empstatus;
  role?: Maybe<Role>;
  salarydetails: Scalars['Int']['output'];
  skills: Scalars['String']['output'];
};

export type EmployeesAvgAggregate = {
  __typename?: 'EmployeesAvgAggregate';
  employeeid?: Maybe<Scalars['Float']['output']>;
  salarydetails?: Maybe<Scalars['Float']['output']>;
};

export type EmployeesAvgOrderByAggregateInput = {
  employeeid?: InputMaybe<SortOrder>;
  salarydetails?: InputMaybe<SortOrder>;
};

export type EmployeesCountAggregate = {
  __typename?: 'EmployeesCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  employeeid: Scalars['Int']['output'];
  employeename: Scalars['Int']['output'];
  employeestatus: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  salarydetails: Scalars['Int']['output'];
  skills: Scalars['Int']['output'];
};

export type EmployeesCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  employeeid?: InputMaybe<SortOrder>;
  employeename?: InputMaybe<SortOrder>;
  employeestatus?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  salarydetails?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
};

export type EmployeesCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  employeeid: Scalars['Int']['input'];
  employeename?: InputMaybe<Scalars['String']['input']>;
  employeestatus: Empstatus;
  role?: InputMaybe<Role>;
  salarydetails: Scalars['Int']['input'];
  skills: Scalars['String']['input'];
};

export type EmployeesCreateManyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  employeeid: Scalars['Int']['input'];
  employeename?: InputMaybe<Scalars['String']['input']>;
  employeestatus: Empstatus;
  role?: InputMaybe<Role>;
  salarydetails: Scalars['Int']['input'];
  skills: Scalars['String']['input'];
};

export type EmployeesGroupBy = {
  __typename?: 'EmployeesGroupBy';
  _avg?: Maybe<EmployeesAvgAggregate>;
  _count?: Maybe<EmployeesCountAggregate>;
  _max?: Maybe<EmployeesMaxAggregate>;
  _min?: Maybe<EmployeesMinAggregate>;
  _sum?: Maybe<EmployeesSumAggregate>;
  address?: Maybe<Scalars['String']['output']>;
  employeeid: Scalars['Int']['output'];
  employeename?: Maybe<Scalars['String']['output']>;
  employeestatus: Empstatus;
  role?: Maybe<Role>;
  salarydetails: Scalars['Int']['output'];
  skills: Scalars['String']['output'];
};

export type EmployeesMaxAggregate = {
  __typename?: 'EmployeesMaxAggregate';
  address?: Maybe<Scalars['String']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  employeename?: Maybe<Scalars['String']['output']>;
  employeestatus?: Maybe<Empstatus>;
  role?: Maybe<Role>;
  salarydetails?: Maybe<Scalars['Int']['output']>;
  skills?: Maybe<Scalars['String']['output']>;
};

export type EmployeesMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  employeeid?: InputMaybe<SortOrder>;
  employeename?: InputMaybe<SortOrder>;
  employeestatus?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  salarydetails?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
};

export type EmployeesMinAggregate = {
  __typename?: 'EmployeesMinAggregate';
  address?: Maybe<Scalars['String']['output']>;
  employeeid?: Maybe<Scalars['Int']['output']>;
  employeename?: Maybe<Scalars['String']['output']>;
  employeestatus?: Maybe<Empstatus>;
  role?: Maybe<Role>;
  salarydetails?: Maybe<Scalars['Int']['output']>;
  skills?: Maybe<Scalars['String']['output']>;
};

export type EmployeesMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  employeeid?: InputMaybe<SortOrder>;
  employeename?: InputMaybe<SortOrder>;
  employeestatus?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  salarydetails?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
};

export type EmployeesOrderByWithAggregationInput = {
  _avg?: InputMaybe<EmployeesAvgOrderByAggregateInput>;
  _count?: InputMaybe<EmployeesCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployeesMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployeesMinOrderByAggregateInput>;
  _sum?: InputMaybe<EmployeesSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  employeeid?: InputMaybe<SortOrder>;
  employeename?: InputMaybe<SortOrderInput>;
  employeestatus?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrderInput>;
  salarydetails?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
};

export type EmployeesOrderByWithRelationInput = {
  address?: InputMaybe<SortOrderInput>;
  employeeid?: InputMaybe<SortOrder>;
  employeename?: InputMaybe<SortOrderInput>;
  employeestatus?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrderInput>;
  salarydetails?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
};

export enum EmployeesScalarFieldEnum {
  Address = 'address',
  Employeeid = 'employeeid',
  Employeename = 'employeename',
  Employeestatus = 'employeestatus',
  Role = 'role',
  Salarydetails = 'salarydetails',
  Skills = 'skills'
}

export type EmployeesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmployeesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployeesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployeesScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  employeeid?: InputMaybe<IntWithAggregatesFilter>;
  employeename?: InputMaybe<StringNullableWithAggregatesFilter>;
  employeestatus?: InputMaybe<EnumEmpstatusWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleNullableWithAggregatesFilter>;
  salarydetails?: InputMaybe<IntWithAggregatesFilter>;
  skills?: InputMaybe<StringWithAggregatesFilter>;
};

export type EmployeesSumAggregate = {
  __typename?: 'EmployeesSumAggregate';
  employeeid?: Maybe<Scalars['Int']['output']>;
  salarydetails?: Maybe<Scalars['Int']['output']>;
};

export type EmployeesSumOrderByAggregateInput = {
  employeeid?: InputMaybe<SortOrder>;
  salarydetails?: InputMaybe<SortOrder>;
};

export type EmployeesUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  employeename?: InputMaybe<Scalars['String']['input']>;
  employeestatus?: InputMaybe<Empstatus>;
  role?: InputMaybe<Role>;
  salarydetails?: InputMaybe<Scalars['Int']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeesUpdateManyMutationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  employeename?: InputMaybe<Scalars['String']['input']>;
  employeestatus?: InputMaybe<Empstatus>;
  role?: InputMaybe<Role>;
  salarydetails?: InputMaybe<Scalars['Int']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeesWhereInput = {
  AND?: InputMaybe<Array<EmployeesWhereInput>>;
  NOT?: InputMaybe<Array<EmployeesWhereInput>>;
  OR?: InputMaybe<Array<EmployeesWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  employeeid?: InputMaybe<IntFilter>;
  employeename?: InputMaybe<StringNullableFilter>;
  employeestatus?: InputMaybe<EnumEmpstatusFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  salarydetails?: InputMaybe<IntFilter>;
  skills?: InputMaybe<StringFilter>;
};

export type EmployeesWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeesWhereInput>>;
  NOT?: InputMaybe<Array<EmployeesWhereInput>>;
  OR?: InputMaybe<Array<EmployeesWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  employeeid?: InputMaybe<Scalars['Int']['input']>;
  employeename?: InputMaybe<StringNullableFilter>;
  employeestatus?: InputMaybe<EnumEmpstatusFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  salarydetails?: InputMaybe<IntFilter>;
  skills?: InputMaybe<StringFilter>;
};

export enum Empstatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type EnumEmpstatusFilter = {
  equals?: InputMaybe<Empstatus>;
  in?: InputMaybe<Array<Empstatus>>;
  not?: InputMaybe<NestedEnumEmpstatusFilter>;
  notIn?: InputMaybe<Array<Empstatus>>;
};

export type EnumEmpstatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumEmpstatusFilter>;
  _min?: InputMaybe<NestedEnumEmpstatusFilter>;
  equals?: InputMaybe<Empstatus>;
  in?: InputMaybe<Array<Empstatus>>;
  not?: InputMaybe<NestedEnumEmpstatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Empstatus>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyEmployees: AffectedRowsOutput;
  createOneEmployees: Employees;
  deleteManyEmployees: AffectedRowsOutput;
  deleteOneEmployees?: Maybe<Employees>;
  updateManyEmployees: AffectedRowsOutput;
  updateOneEmployees?: Maybe<Employees>;
  upsertOneEmployees: Employees;
};


export type MutationCreateManyEmployeesArgs = {
  data: Array<EmployeesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneEmployeesArgs = {
  data: EmployeesCreateInput;
};


export type MutationDeleteManyEmployeesArgs = {
  where?: InputMaybe<EmployeesWhereInput>;
};


export type MutationDeleteOneEmployeesArgs = {
  where: EmployeesWhereUniqueInput;
};


export type MutationUpdateManyEmployeesArgs = {
  data: EmployeesUpdateManyMutationInput;
  where?: InputMaybe<EmployeesWhereInput>;
};


export type MutationUpdateOneEmployeesArgs = {
  data: EmployeesUpdateInput;
  where: EmployeesWhereUniqueInput;
};


export type MutationUpsertOneEmployeesArgs = {
  create: EmployeesCreateInput;
  update: EmployeesUpdateInput;
  where: EmployeesWhereUniqueInput;
};

export type NestedEnumEmpstatusFilter = {
  equals?: InputMaybe<Empstatus>;
  in?: InputMaybe<Array<Empstatus>>;
  not?: InputMaybe<NestedEnumEmpstatusFilter>;
  notIn?: InputMaybe<Array<Empstatus>>;
};

export type NestedEnumEmpstatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumEmpstatusFilter>;
  _min?: InputMaybe<NestedEnumEmpstatusFilter>;
  equals?: InputMaybe<Empstatus>;
  in?: InputMaybe<Array<Empstatus>>;
  not?: InputMaybe<NestedEnumEmpstatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Empstatus>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumRoleNullableFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateEmployees: AggregateEmployees;
  findFirstEmployees?: Maybe<Employees>;
  findFirstEmployeesOrThrow?: Maybe<Employees>;
  findManyEmployees: Array<Employees>;
  findUniqueEmployees?: Maybe<Employees>;
  findUniqueEmployeesOrThrow?: Maybe<Employees>;
  groupByEmployees: Array<EmployeesGroupBy>;
};


export type QueryAggregateEmployeesArgs = {
  cursor?: InputMaybe<EmployeesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeesWhereInput>;
};


export type QueryFindFirstEmployeesArgs = {
  cursor?: InputMaybe<EmployeesWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeesWhereInput>;
};


export type QueryFindFirstEmployeesOrThrowArgs = {
  cursor?: InputMaybe<EmployeesWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeesWhereInput>;
};


export type QueryFindManyEmployeesArgs = {
  cursor?: InputMaybe<EmployeesWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeesWhereInput>;
};


export type QueryFindUniqueEmployeesArgs = {
  where: EmployeesWhereUniqueInput;
};


export type QueryFindUniqueEmployeesOrThrowArgs = {
  where: EmployeesWhereUniqueInput;
};


export type QueryGroupByEmployeesArgs = {
  by: Array<EmployeesScalarFieldEnum>;
  having?: InputMaybe<EmployeesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployeesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeesWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Developer = 'DEVELOPER',
  Manager = 'MANAGER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type CreatemanyemplyeMutationVariables = Exact<{
  data: Array<EmployeesCreateManyInput> | EmployeesCreateManyInput;
}>;


export type CreatemanyemplyeMutation = { __typename?: 'Mutation', createManyEmployees: { __typename: 'AffectedRowsOutput', count: number } };

export type UpdateOneEmployeesMutationVariables = Exact<{
  data: EmployeesUpdateInput;
  where: EmployeesWhereUniqueInput;
}>;


export type UpdateOneEmployeesMutation = { __typename?: 'Mutation', updateOneEmployees?: { __typename?: 'Employees', employeeid: number, employeename?: string | null } | null };


export const CreatemanyemplyeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createmanyemplye"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeesCreateManyInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createManyEmployees"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<CreatemanyemplyeMutation, CreatemanyemplyeMutationVariables>;
export const UpdateOneEmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOneEmployees"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeesUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeesWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneEmployees"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeid"}},{"kind":"Field","name":{"kind":"Name","value":"employeename"}}]}}]}}]} as unknown as DocumentNode<UpdateOneEmployeesMutation, UpdateOneEmployeesMutationVariables>;