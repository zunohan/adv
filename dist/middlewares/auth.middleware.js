"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const user_model_1 = require("../entities/user.model");
const authMiddleware = async ({ context }, next) => {
    try {
        // getting a token from authorization header
        const authHeader = context.req.headers.authorization;
        if (!authHeader)
            throw new apollo_server_express_1.AuthenticationError("Not authen!...");
        const accessToken = authHeader.split("Bearer ")[1];
        if (!accessToken)
            throw new apollo_server_express_1.AuthenticationError("You need to perform Token!...");
        // const { address, body }: TToken = Web3Token.verify(accessToken)
        // if (!address || !body) throw new AuthenticationError("You need to perform Token!...")
        const address = "0xa9a970dFbA2BE332683F2C88557eea0a607A5486";
        const user = await user_model_1.UserModel.findOneBy({ address });
        console.log(user);
        if (!user)
            throw new apollo_server_express_1.AuthenticationError("Please sign up your wallet first to lo");
        context.req.user_id = user.id;
        context.req.address = address;
        return next();
    }
    catch (error) {
        throw new apollo_server_express_1.AuthenticationError("Bad request!...");
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map