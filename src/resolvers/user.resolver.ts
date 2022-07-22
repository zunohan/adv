import { Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware } from "type-graphql"
import { UserModel } from "../entities/user.model"
// import authMiddleware from "../middlewares/auth.middleware"

import { UserArrResponse, UserObjectResponse } from "../types/user.type"
import { catchErr } from "../utils/handleError"

@InputType()
class SignUpInput {
    @Field()
    address!: string

    @Field()
    email?: string

    @Field()
    name?: string
}

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
                data: user,
            }
        } catch (error) {
            return catchErr()
        }
    }

    @Mutation(() => UserObjectResponse, { nullable: true })
    async seedUser(
        @Arg("SignUpInput") { address, email, name }: SignUpInput
    ): Promise<UserObjectResponse> {
        try {
            const user = await UserModel.create({
                email: "pnlan1406@gmail.com",
                name: "ZUNO",
                address: "0xa9a970dFbA2BE332683F2C88557eea0a607A5486",
            }).save()
            return {
                success: true,
                msg: "You have created a new one!!!!!",
                data: user,
            }
        } catch (error) {
            return catchErr()
        }
    }

    @Mutation(() => UserObjectResponse, { nullable: true })
    async signupUser(
        @Arg("SignUpInput") { address, email, name }: SignUpInput
    ): Promise<UserObjectResponse> {
        try {
            const existingUser = await UserModel.findOneBy({ address })
            if (existingUser)
                return {
                    success: false,
                    msg: "Your address wallet is existed!",
                }
            const user = await UserModel.create({ address, email, name }).save()
            return {
                success: true,
                msg: "You have created a new one!!!!!",
                data: user,
            }
        } catch (error) {
            return catchErr()
        }
    }

    @Mutation(() => UserObjectResponse, { nullable: true })
    async loginUser(
        @Arg("LoginInput") { email, address }: LoginInput
    ): Promise<UserObjectResponse> {
        try {
            return {
                success: true,
                msg: "You logged in succesfully!",
            }
        } catch (error) {
            return catchErr()
        }
    }
}
