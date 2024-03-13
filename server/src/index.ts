require("dotenv").config();
import "reflect-metadata";
import { __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import cors from "cors";
import bodyParser from "body-parser";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { join } from "path";
import { prismaClient } from "../prisma/__generated__/client";
import moment from "moment-timezone";

import { crudResolvers } from "../prisma/__generated__/graphql";
moment.tz.setDefault("UTC")
const main = async () => {

  const app = express();
  app.use(express.json({ limit: "10GB" }));
  app.use(bodyParser.urlencoded({ limit: "10GB", extended: false }));
  app.use(bodyParser.json());

  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
      ],
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [...crudResolvers],
      validate: false,
    }),
    introspection: true,
    cache: new InMemoryLRUCache(),
    context: async ({ req }) => {
      return { prisma: prismaClient };
    },
    formatError: (err) => {
      if (err.message.includes("Access denied!")) {
        err.extensions.code = "ACCESS_DENIED";
        return err;
      }
      if (err.extensions.exception?.name === "PrismaClientKnownRequestError") {
        err.extensions.field = err.extensions.exception?.meta?.target
      }
      // Otherwise return the original error. The error can also
      // be manipulated in other ways, as long as it's returned.
      return err;
    },
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
    bodyParserConfig: { limit: "1tb" },
  });
  if (!__prod__) {
    app.use(express.static(join(process.cwd())));
  }
  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000");
  });
};

main().catch((err) => console.error(err));
