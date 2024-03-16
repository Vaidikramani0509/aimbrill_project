import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Empstatus } from "../../enums/Empstatus";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("EmployeesMaxAggregate", {
        simpleResolvers: true
    })
export class EmployeesMaxAggregate {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    employeeid!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename!: string | null;

    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: true
        })
    employeestatus!: "ACTIVE" | "INACTIVE" | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    skills!: string | null;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: true
        })
    salarydetails!: number | null;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address!: string | null;

    @TypeGraphQL.Field(_type => Role, {
            nullable: true
        })
    role!: "MANAGER" | "DEVELOPER" | null;
}
