import { Query, Resolver } from "type-graphql"

@Resolver()
export class PingResolver {
    @Query(() => String)
    async ping() {
        try {
            return "PING PONG"
        } catch (error) {
            return "NO PING PONG"
        }
    }
}
