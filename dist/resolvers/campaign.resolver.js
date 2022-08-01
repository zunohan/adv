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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignResolver = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const campaign_type_1 = require("../types/campaign.type");
const campaign_model_1 = require("../entities/campaign.model");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const handleError_1 = require("../utils/handleError");
const user_model_1 = require("../entities/user.model");
let CreateCampaignInput = class CreateCampaignInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCampaignInput.prototype, "objective", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.Length)(4, 50, { message: "Name must be in range between 4 and 50 characters..." }),
    __metadata("design:type", String)
], CreateCampaignInput.prototype, "name", void 0);
CreateCampaignInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateCampaignInput);
let CampaignResolver = class CampaignResolver {
    // query
    async getCampaigns({ req: { user_id } }) {
        try {
            const campaigns = await campaign_model_1.CampaignModel.find({
                relations: ["user", "ads"],
                where: { user_id },
            });
            return {
                success: true,
                data: campaigns,
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
    // mutation
    async createCampaign({ objective, name }, { req: { user_id } }) {
        try {
            const existedCampaign = await campaign_model_1.CampaignModel.findOneBy({ name });
            if (existedCampaign)
                return (0, handleError_1.catchErr)("Campaign name is existed. Please re-input with another...");
            const campaign = campaign_model_1.CampaignModel.create({ objective, name, user_id });
            const user = await user_model_1.UserModel.findOneBy({ id: user_id });
            await Promise.all([
                campaign.save(),
                user_model_1.UserModel.update({ id: user_id }, { totalCampaign: (user === null || user === void 0 ? void 0 : user.totalCampaign) + 1 }),
            ]);
            return {
                success: true,
                msg: "Successfully create a new campaign!",
                data: campaign,
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => campaign_type_1.CampaignArrResponse, { nullable: true }),
    (0, type_graphql_1.UseMiddleware)(auth_middleware_1.default),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampaignResolver.prototype, "getCampaigns", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => campaign_type_1.CampaignObjectResponse, { nullable: true }) // create new campaign
    ,
    (0, type_graphql_1.UseMiddleware)(auth_middleware_1.default),
    __param(0, (0, type_graphql_1.Arg)("CreateCampaignInput")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCampaignInput, Object]),
    __metadata("design:returntype", Promise)
], CampaignResolver.prototype, "createCampaign", null);
CampaignResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CampaignResolver);
exports.CampaignResolver = CampaignResolver;
//# sourceMappingURL=campaign.resolver.js.map