import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { PrismaClient } from "prisma/prisma-client";

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  user: string | null;
  prisma: PrismaClient
};
export enum LogLevel {
  CRITICAL = 5,
  DEBUG = 1,
  ERROR = 4,
  INFO = 2,
  NONE = 6,
  TRACE = 0,
  WARN = 3,
}
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object
  ? U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : U
  : T;
