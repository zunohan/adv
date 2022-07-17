import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql"
import { CampaignArrResponse, CampaignObjectResponse } from "../types/campaign.type"
import { CampaignModel } from "../entities/campaign.model"
import { catchErr } from "../types/response.type"
import { UserModel } from "../entities/user.model"

const Web3Token = require("web3-token")

@InputType()
class CreateCampaignInput {
    @Field()
    objective!: string

    @Field()
    name!: string
}

@Resolver()
export class CampaignResolver {
    // query
    @Query(() => String, { nullable: true })
    async hello() {
        console.log(Web3Token)
        try {
            return "hhhhh"
        } catch (error) {
            return catchErr
        }
    }

    @Query(() => CampaignArrResponse, { nullable: true })
    async getCampaigns(): Promise<CampaignArrResponse> {
        const campaigns = await CampaignModel.find({ relations: ["user"] })
        return {
            success: true,
            msg: "get all camp",
            data: campaigns,
        }
    }

    // mutation
    @Mutation(() => CampaignObjectResponse, { nullable: true }) // create new campaign
    async createCampaign(
        @Arg("CreateCampaignInput")
        { objective, name }: CreateCampaignInput
    ): Promise<CampaignObjectResponse> {
        try {
            const user_id: number = 1
            const campaign = await CampaignModel.create({
                objective,
                name,
                user_id,
            }).save()

            return {
                success: true,
                msg: "",
                data: campaign,
            }
        } catch (error) {
            console.log(error)
            return catchErr
        }
    }

    // @Mutation(() => CampaignObjectResponse, { nullable: true }) // delete campaign
}
