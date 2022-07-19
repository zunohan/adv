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

    @Query(() => String)
    async pong() {
        try {
            return "PING PONG - ping pong"
        } catch (error) {
            return "NO PING PONG"
        }
    }
}
