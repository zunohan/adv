import express, { Express } from "express"
import dotenv from "dotenv"
dotenv.config({ path: ".env" })
import "reflect-metadata"
import initDatabase from "./utils/initDB"
import { ApolloError, ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import { PingResolver } from "./resolvers/ping.resolver"
import { UserResolver } from "./resolvers/user.resolver"
import { CampaignResolver } from "./resolvers/campaign.resolver"
import { AdResolver } from "./resolvers/ad.resolver"

const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js")

const startServer = async () => {
    try {
        await initDatabase() // init DB
        const schema = await buildSchema({
            resolvers: [PingResolver, UserResolver, CampaignResolver, AdResolver],
        })

        const server = new ApolloServer({
            schema,
            csrfPrevention: false,
            context: ({ req, res }) => ({ req, res }),
            formatError: ({ message, extensions }) => {
                return { success: false, message, extensions }
            },
        })
        await server.start()
        const app: Express = express()

        app.use(graphqlUploadExpress())

        app.use("/public", express.static("upload")) // change upload -> public path

        server.applyMiddleware({ app, path: "/gql/v1" })

        const PORT = process.env.PORT
        await new Promise<void>((r) => app.listen({ port: PORT }, r))
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath} 🚀`)
    } catch (error) {
        process.exit(1)
    }
}
startServer()
