"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
require("reflect-metadata");
const initDB_1 = __importDefault(require("./utils/initDB"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const ping_resolver_1 = require("./resolvers/ping.resolver");
const user_resolver_1 = require("./resolvers/user.resolver");
const campaign_resolver_1 = require("./resolvers/campaign.resolver");
const ad_resolver_1 = require("./resolvers/ad.resolver");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
const startServer = async () => {
    try {
        await (0, initDB_1.default)(); // init DB
        const schema = await (0, type_graphql_1.buildSchema)({
            resolvers: [ping_resolver_1.PingResolver, user_resolver_1.UserResolver, campaign_resolver_1.CampaignResolver, ad_resolver_1.AdResolver],
            validate: false,
        });
        const server = new apollo_server_express_1.ApolloServer({
            schema,
            csrfPrevention: false,
            context: ({ req, res }) => ({ req, res }),
        });
        await server.start();
        const app = (0, express_1.default)();
        app.use(graphqlUploadExpress());
        app.use("/public", express_1.default.static("upload")); // change upload -> public path
        server.applyMiddleware({ app, path: "/gql/v1" });
        const PORT = process.env.PORT;
        await new Promise((r) => app.listen({ port: PORT }, r));
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀`);
    }
    catch (error) {
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map