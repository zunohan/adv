import { Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from "type-graphql"
import { UserModel } from "../entities/user.model"
import authMiddleware from "../middlewares/auth.middleware"
import { catchErr } from "../types/response.type"
import { UserArrResponse, UserObjectResponse } from "../types/user.type"

const Web3Token = require("web3-token")

@InputType()
class LoginInput {
    @Field()
    email?: string

    @Field()
    address!: string
}

@Resolver()
export class UserResolver {
    @Query(() => UserObjectResponse)
    async getUser(): Promise<UserArrResponse> {
        try {
            const user = await UserModel.find()
            return {
                success: true,
                msg: "",
                data: user
            }
        } catch (error) {return catchErr}
    }

    @Mutation(() => UserObjectResponse, { nullable: true })
    // @UseMiddleware(authMiddleware)
    async createUser(): Promise<UserObjectResponse> {
        try {
            const user = new UserModel()
            user.email = "pnlan1406@gmail.com"
            user.password = "111111"
            user.name = "ZUNO"
            user.wallet = "0xa9a970dFbA2BE332683F2C88557eea0a607A5486"
            await user.save()
            return {
                success: true,
                msg: "You have created a new one!!!!!",
                data: user,
            }
        } catch (error) {
            return catchErr
        }
    }

    @Mutation(() => UserObjectResponse, { nullable: true })
    // @UseMiddleware(authMiddleware)
    async login(@Arg("LoginInput") { email, address }: LoginInput): Promise<UserObjectResponse> {
        try {
            return {
                success: true,
                msg: "You logged in succesfully!",
            }
        } catch (error) {
            return catchErr
        }
    }
}
