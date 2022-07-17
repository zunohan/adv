import { Field, ObjectType } from "type-graphql"
import { IResponse } from "./response.type"
import { CampaignModel } from "../entities/campaign.model"

// Array/Collection
@ObjectType({ implements: IResponse })
export class CampaignArrResponse implements IResponse {
    success: boolean
    msg: string

    @Field(() => [CampaignModel], { nullable: true })
    data?: CampaignModel[]
}

// Single
@ObjectType({ implements: IResponse })
export class CampaignObjectResponse implements IResponse {
    success: boolean
    msg: string

    @Field(() => CampaignModel, { nullable: true })
    data?: CampaignModel
}