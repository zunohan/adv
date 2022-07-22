import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from "type-graphql"
import { Length, validate } from "class-validator"
import { CampaignArrResponse, CampaignObjectResponse } from "../types/campaign.type"
import { CampaignModel } from "../entities/campaign.model"
import authMiddleware, { IContext } from "../middlewares/auth.middleware"
import { catchErr } from "../utils/handleError"
import { UserModel } from "../entities/user.model"

@InputType()
class CreateCampaignInput {
    @Field()
    objective!: string

    @Field()
    @Length(4, 50, { message: "Name must be in range between 4 and 50 characters..." })
    name!: string
}

@Resolver()
export class CampaignResolver {
    // query

    @Query(() => CampaignArrResponse, { nullable: true })
    @UseMiddleware(authMiddleware)
    async getCampaigns(@Ctx() { req: { user_id } }: IContext) {
        try {
            const campaigns = await CampaignModel.find({
                relations: ["user", "ads"],
                where: { user_id },
            })
            return {
                success: true,
                data: campaigns,
            }
        } catch (error) {
            return catchErr()
        }
    }

    // mutation
    @Mutation(() => CampaignObjectResponse, { nullable: true }) // create new campaign
    @UseMiddleware(authMiddleware)
    async createCampaign(
        @Arg("CreateCampaignInput")
        { objective, name }: CreateCampaignInput,
        @Ctx() { req: { user_id } }: IContext
    ): Promise<CampaignObjectResponse> {
        try {
            const existedCampaign = await CampaignModel.findOneBy({ name })
            if (existedCampaign)
                return catchErr("Campaign name is existed. Please re-input with another name!")

            const campaign = CampaignModel.create({ objective, name, user_id })
            const user = await UserModel.findOneBy({ id: user_id })
            await Promise.all([
                campaign.save(),
                UserModel.update({ id: user_id }, { totalCampaign: user?.totalCampaign! + 1 }),
            ])

            return {
                success: true,
                msg: "Successfully create new campaign!",
                data: campaign,
            }
        } catch (error) {
            return catchErr()
        }
    }

    // @Mutation(() => CampaignObjectResponse, { nullable: true }) // delete campaign
}
