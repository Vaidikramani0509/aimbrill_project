import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Employee {
    @Field(() => Int)
    @PrimaryKey()
    employeeid!: number;

    @Field({ nullable: true })
    @Property({ type: "varchar", length: 100, nullable: true })
    employeename?: string;

    @Field({ nullable: true })
    @Property({ type: "varchar", length: 50, nullable: true })
    employeestatus?: string;

    @Field({ nullable: true })
    @Property({ type: "text", nullable: true })
    skills?: string;

    @Field(() => Float, { nullable: true })
    @Property({ type: "decimal", nullable: true, length: 10, precision: 2 })
    salarydetails?: number;

    @Field({ nullable: true })
    @Property({ type: "text", nullable: true })
    address?: string;
}