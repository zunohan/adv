import { Arg, Field, InputType, Int, Mutation, Query, Resolver } from "type-graphql"
import { AdObjectResponse } from "../types/ad.type"
import { catchErr } from "../utils/handleError"


@InputType()
class CreateAdByCampaignInPut {
    @Field(() => Int)
    campaignId: number

    @Field()
    name: string

    @Field()
    buyingModel: string

    @Field()
    targetUrl: string

    @Field()
    budget: string

    @Field()
    bidding: string

    @Field()
    format: string

    @Field()
    option?: string

    @Field()
    freCapping: string

    @Field()
    schedule: string

    @Field()
    targeting?: string
}

@Resolver()
export class AdResolver {
    // query
    @Query(() => String, { nullable: true })
    async getAds() {
        try {
            return "hhhhh"
        } catch (error) {
            return catchErr()
        }
    }

    @Mutation(() => AdObjectResponse)
    async createAdByCampaign(
        @Arg("CreateAdByCampaignInPut")
        {
            campaignId,
            name,
            buyingModel,
            targetUrl,
            budget,
            bidding,
            format,
            option,
            freCapping,
            schedule,
            targeting,
        }: CreateAdByCampaignInPut
    ): Promise<AdObjectResponse> {
        try {
            console.log({
                campaignId,
                name,
                buyingModel,
                targetUrl,
                budget,
                bidding,
                format,
                option,
                freCapping,
                schedule,
                targeting,
            })
            return {
                success: true,
                msg: "Successfully create new Ad",
            }
        } catch (error) {
            return catchErr()
        }
    }
}
