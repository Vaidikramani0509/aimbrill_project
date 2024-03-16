import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Empstatus } from "../enums/Empstatus";
import { Role } from "../enums/Role";

@TypeGraphQL.ObjectType("Employees", {
        simpleResolvers: true
    })
export class Employees {
    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    employeeid!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    employeename?: string | null;

    @TypeGraphQL.Field(_type => Empstatus, {
            nullable: false
        })
    employeestatus!: "ACTIVE" | "INACTIVE";

    @TypeGraphQL.Field(_type => String, {
            nullable: false
        })
    skills!: string;

    @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
            nullable: false
        })
    salarydetails!: number;

    @TypeGraphQL.Field(_type => String, {
            nullable: true
        })
    address?: string | null;

    @TypeGraphQL.Field(_type => Role, {
            nullable: true
        })
    role?: "MANAGER" | "DEVELOPER" | null;
}
