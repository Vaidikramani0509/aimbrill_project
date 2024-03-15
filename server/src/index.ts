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
import multer from "multer";
import csvParser from "csv-parser";
import fs from "fs";
import { Pool } from "pg";

import { crudResolvers } from "../prisma/__generated__/graphql";
moment.tz.setDefault("UTC")
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost:5432',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'admin123',
  port: 5432
});
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
  const upload = multer({ dest: "upload/" });

  // Define the endpoint for file uploads
  app.post("/upload/", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const results: any[] = [];
      // Parse uploaded CSV file
      fs.createReadStream(req.file.path)
        .pipe(csvParser())
        .on("data", (data) => results.push(data))
        .on("end", async () => {
          // Insert data into PostgreSQL
          try {
            for (const row of results) {
              // Insert row into your database using Prisma or any other ORM
              // Example with Prisma:
              await prismaClient.employees.create({
                data: {
                  birthdate: '23/02/2023',
                  employeestatus: 'ACTIVE',
                  joiningdate: '20/23/4',
                  salarydetails: 2000,
                  address: '',
                  employeeid: 2,
                  employeename: 'testname',
                  skills: ['prisma', 'react.js']
                }
              });
            }

            res
              .status(200)
              .json({ message: "File uploaded and data inserted successfully" });
          } catch (error) {
            console.error("Error inserting data into PostgreSQL:", error);
            res
              .status(500)
              .json({ message: "Error inserting data into PostgreSQL" });
          }
        });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ message: "Error uploading file" });
    }
  });
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
