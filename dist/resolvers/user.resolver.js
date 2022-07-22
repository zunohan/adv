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
const user_type_1 = require("../types/user.type");
const handleError_1 = require("../utils/handleError");
let SignUpInput = class SignUpInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SignUpInput.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SignUpInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], SignUpInput.prototype, "name", void 0);
SignUpInput = __decorate([
    (0, type_graphql_1.InputType)()
], SignUpInput);
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
                data: user,
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
    async seedUser({ address, email, name }) {
        try {
            const user = await user_model_1.UserModel.create({
                email: "pnlan1406@gmail.com",
                name: "ZUNO",
                address: "0xa9a970dFbA2BE332683F2C88557eea0a607A5486",
            }).save();
            return {
                success: true,
                msg: "You have created a new one!!!!!",
                data: user,
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
    async signupUser({ address, email, name }) {
        try {
            const existingUser = await user_model_1.UserModel.findOneBy({ address });
            if (existingUser)
                return {
                    success: false,
                    msg: "Your address wallet is existed!",
                };
            const user = await user_model_1.UserModel.create({ address, email, name }).save();
            return {
                success: true,
                msg: "You have created a new one!!!!!",
                data: user,
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
    async loginUser({ email, address }) {
        try {
            return {
                success: true,
                msg: "You logged in succesfully!",
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
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
    __param(0, (0, type_graphql_1.Arg)("SignUpInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignUpInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "seedUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_type_1.UserObjectResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("SignUpInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SignUpInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "signupUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => user_type_1.UserObjectResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("LoginInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "loginUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map