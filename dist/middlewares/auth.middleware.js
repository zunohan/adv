"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const Web3Token = require("web3-token");
const authMiddleware = async ({ context }, next) => {
    try {
        // getting a token from authorization header
        const authHeader = context.req.headers.authorization;
        if (!authHeader)
            throw new apollo_server_express_1.AuthenticationError("Not authen!...");
        console.log(authHeader);
        // const { address, body } = await Web3Token.verify(token)
        // if (!address) throw new AuthenticationError("You need to perform Token!...")
        // context.req.address = await UserModel.findOne({ address })
        return next();
    }
    catch (error) {
        throw new apollo_server_express_1.AuthenticationError("Bad request!...");
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map