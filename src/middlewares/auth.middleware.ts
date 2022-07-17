import { AuthenticationError } from "apollo-server-express"
import { MiddlewareFn, NextFn } from "type-graphql"
import { Request, Response } from "express"
import { UserModel } from "../entities/user.model"
const Web3Token = require("web3-token")

interface IExtendRequest extends Request {
    address: string
}

interface IContext {
    req: IExtendRequest
    res: Response
}

const authMiddleware: MiddlewareFn<IContext> = async ({ context }, next: NextFn) => {
    try {
        // getting a token from authorization header
        const authHeader = context.req.headers.authorization
        if (!authHeader) throw new AuthenticationError("Not authen!...")

        console.log(authHeader)

        // const { address, body } = await Web3Token.verify(token)
        // if (!address) throw new AuthenticationError("You need to perform Token!...")
        // context.req.address = await UserModel.findOne({ address })

        return next()
    } catch (error) {
        throw new AuthenticationError("Bad request!...")
    }
}

export default authMiddleware
