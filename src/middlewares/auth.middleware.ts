import { AuthenticationError } from "apollo-server-express"
import { MiddlewareFn, NextFn } from "type-graphql"
import { Request, Response } from "express"
import { UserModel } from "../entities/user.model"
import * as Web3Token from "web3-token"

interface IExtendRequest extends Request {
    user_id: number
    address: string
}

export interface IContext {
    req: IExtendRequest
    res: Response
}

type TToken = {
    address: string
    body: any
}

const authMiddleware: MiddlewareFn<IContext> = async ({ context }, next: NextFn) => {
    try {
        // getting a token from authorization header
        const authHeader = context.req.headers.authorization
        if (!authHeader) throw new AuthenticationError("Not authen!...")

        const accessToken = authHeader.split("Bearer ")[1]
        if (!accessToken) throw new AuthenticationError("You need to perform Token!...")

        // const { address, body }: TToken = Web3Token.verify(accessToken)
        // if (!address || !body) throw new AuthenticationError("You need to perform Token!...")

        const address: string = "0xa9a970dFbA2BE332683F2C88557eea0a607A5486"

        const user = await UserModel.findOneBy({ address })
        if (!user) throw new AuthenticationError("Please sign up your wallet first to lo")

        context.req.user_id = user.id
        context.req.address = address

        return next()
    } catch (error) {
        throw new AuthenticationError("Bad request!...")
    }
}

export default authMiddleware
