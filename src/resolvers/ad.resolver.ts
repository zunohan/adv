import { Mutation, Query, Resolver } from "type-graphql"
import { AdObjectResponse } from "../types/ad.type"
import { catchErr } from "../types/response.type"

@Resolver()
export class AdResolver {
    // query
    @Query(() => String, { nullable: true })
    async getAds() {
        try {
            return "hhhhh"
        } catch (error) {
            return catchErr
        }
    }

    @Mutation(() => AdObjectResponse)
    async createAdByCampaign() {
        try {

        } catch (error) {
            return catchErr
        }
    }
}
