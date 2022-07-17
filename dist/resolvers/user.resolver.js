"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const user_model_1 = require("../entities/user.model");
// import authMiddleware from "../middlewares/auth.middleware"
const response_type_1 = require("../types/response.type");
const user_type_1 = require("../types/user.type");
const Web3Token = require("web3-token");
let LoginInput = class LoginInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginInput.prototype, "address", void 0);
LoginInput = __decorate([
    (0, type_graphql_1.InputType)()
], LoginInput);
let UserResolver = class UserResolver {
    async getUser() {
        try {
            const user = await user_model_1.UserModel.find();
            return {
                success: true,
                msg: "",
                data: user
            };
        }
        catch (error) {
            return response_type_1.catchErr;
        }
    }
    // @UseMiddleware(authMiddleware)
    async createUser() {
        try {
            const user = new user_model_1.UserModel();
            user.email = "pnlan1406@gmail.com";
            user.password = "111111";
            user.name = "ZUNO";
            user.wallet = "0xa9a970dFbA2BE332683F2C88557eea0a607A5486";
            await user.save();
            return {
                success: true,
                msg: "You have created a new one!!!!!",
                data: user,
            };
        }
        catch (error) {
            return response_type_1.catchErr;
        }
    }
    // @UseMiddleware(authMiddleware)
    async login({ email, address }) {
        try {
            return {
                success: true,
                msg: "You logged in succesfully!",
            };
        }
        catch (error) {
            return response_type_1.catchErr;
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => user_type_1.UserObjectResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_type_1.UserObjectResponse, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_type_1.UserObjectResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("LoginInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map