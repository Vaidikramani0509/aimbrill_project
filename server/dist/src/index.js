"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
require("reflect-metadata");
const constants_1 = require("./constants");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const utils_keyvaluecache_1 = require("@apollo/utils.keyvaluecache");
const path_1 = require("path");
const client_1 = require("../prisma/__generated__/client");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const multer_1 = __importDefault(require("multer"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const pg_1 = require("pg");
const graphql_1 = require("../prisma/__generated__/graphql");
moment_timezone_1.default.tz.setDefault("UTC");
const pool = new pg_1.Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost:5432',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'admin123',
    port: 5432
});
const main = async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: "10GB" }));
    app.use(body_parser_1.default.urlencoded({ limit: "10GB", extended: false }));
    app.use(body_parser_1.default.json());
    app.use((0, cors_1.default)({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
        ],
        credentials: true,
    }));
    const upload = (0, multer_1.default)({ dest: "upload/" });
    app.post("/upload/", upload.single("file"), async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }
            const results = [];
            fs_1.default.createReadStream(req.file.path)
                .pipe((0, csv_parser_1.default)())
                .on("data", (data) => results.push(data))
                .on("end", async () => {
                try {
                    for (const row of results) {
                        await client_1.prismaClient.employees.create({
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
                }
                catch (error) {
                    console.error("Error inserting data into PostgreSQL:", error);
                    res
                        .status(500)
                        .json({ message: "Error inserting data into PostgreSQL" });
                }
            });
        }
        catch (error) {
            console.error("Error uploading file:", error);
            res.status(500).json({ message: "Error uploading file" });
        }
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [...graphql_1.crudResolvers],
            validate: false,
        }),
        introspection: true,
        cache: new utils_keyvaluecache_1.InMemoryLRUCache(),
        context: async ({ req }) => {
            return { prisma: client_1.prismaClient };
        },
        formatError: (err) => {
            var _a, _b, _c;
            if (err.message.includes("Access denied!")) {
                err.extensions.code = "ACCESS_DENIED";
                return err;
            }
            if (((_a = err.extensions.exception) === null || _a === void 0 ? void 0 : _a.name) === "PrismaClientKnownRequestError") {
                err.extensions.field = (_c = (_b = err.extensions.exception) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.target;
            }
            return err;
        },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        cors: false,
        bodyParserConfig: { limit: "1tb" },
    });
    if (!constants_1.__prod__) {
        app.use(express_1.default.static((0, path_1.join)(process.cwd())));
    }
    app.listen(4000, () => {
        console.log("Server started on http://localhost:4000");
    });
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map