import {
    Arg,
    Ctx,
    Field,
    InputType,
    Int,
    Mutation,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql"
import { AdModel } from "../entities/ad.model"
import { CampaignModel } from "../entities/campaign.model"
import authMiddleware, { IContext } from "../middlewares/auth.middleware"
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
    options?: string

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

    @Mutation(() => AdObjectResponse) // create new ad
    @UseMiddleware(authMiddleware)
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
            options,
            freCapping,
            schedule,
            targeting,
        }: CreateAdByCampaignInPut,
        @Ctx() { req: { user_id } }: IContext
    ): Promise<AdObjectResponse> {
        try {
            // console.log({
            //     campaignId,
            //     name,
            //     buyingModel,
            //     targetUrl,
            //     budget,
            //     bidding,
            //     format,
            //     options,
            //     freCapping,
            //     schedule,
            //     targeting,
            // })
            const existedAd = await AdModel.findOneBy({ name })
            if (existedAd) return catchErr("Ad name is existed. Please re-input with another...")

            const ad = AdModel.create({
                name,
                buying_model: buyingModel,
                target_url: targetUrl,
                budget,
                bidding,
                format,
                options,
                fre_capping: freCapping,
                schedule,
                targeting,
                campaign_id: campaignId,
            })

            const campaign = await CampaignModel.findOneBy({ id: campaignId })
            await Promise.all([
                ad.save(),
                CampaignModel.update({ id: campaignId }, { totalAd: campaign?.totalAd! + 1 }),
            ])

            return {
                success: true,
                msg: "Successfully create new Ad",
                data: ad
            }
        } catch (error) {
            return catchErr()
        }
    }
}
