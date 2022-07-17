import { Field, ObjectType } from "type-graphql"
import { IResponse } from "./response.type"
import { AdModel } from "../entities/ad.model"

// Array/Collection
@ObjectType({ implements: IResponse })
export class AdArrResponse implements IResponse {
    success: boolean
    msg: string

    @Field(() => [AdModel], { nullable: true })
    data?: AdModel[]
}

// Single
@ObjectType({ implements: IResponse })
export class AdObjectResponse implements IResponse {
    success: boolean
    msg: string

    @Field(() => AdModel, { nullable: true })
    data?: AdModel
}
