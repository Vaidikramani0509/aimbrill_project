import { wrap } from "@mikro-orm/core";
import { MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  // InputType,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Employee } from "../entities/Employee";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}
@ObjectType()
export class BaseResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}
@ObjectType()
class EmployeResponse extends BaseResponse {
  @Field(() => Employee, { nullable: true })
  employee?: Employee;
}

@InputType()
class UpdateUserInput {
  @Field(() => String, { nullable: true })
  name?: string;
}

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async users(@Ctx() { em }: MyContext): Promise<Employee[]> {
    return em.find(
      Employee,
      {},
      {
        orderBy: { joiningdate: "ASC" },
        populate: ["employeename"],
      }
    );
  }

  @Mutation(() => EmployeResponse)
  async updateEmployee(
    @Arg("id") id: number,
    @Arg("updates") updates: UpdateUserInput,
    @Ctx() { em }: MyContext
  ): Promise<EmployeResponse> {
    if (!id) {
      return {
        errors: [{ field: "id", message: "Please provide a user id!" }],
      };
    }
    const employee = await em.findOne(Employee, { populate: ["name"] });
    if (!user) {
      return {
        errors: [
          { field: "username", message: "Please provide a valid username!" },
        ],
      };
    }
    wrap(user).assign(updates);
    await em.persistAndFlush(user);
    return { user };
  }


  @Mutation(() => Boolean)
  async deleteUser(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      const user = await em.findOne(User, { id });
      if (user) {
        await em.removeAndFlush(user);
        return true;
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
