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
exports.CampaignResolver = void 0;
const type_graphql_1 = require("type-graphql");
const campaign_type_1 = require("../types/campaign.type");
const campaign_model_1 = require("../entities/campaign.model");
const response_type_1 = require("../types/response.type");
const Web3Token = require("web3-token");
let CreateCampaignInput = class CreateCampaignInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCampaignInput.prototype, "objective", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCampaignInput.prototype, "name", void 0);
CreateCampaignInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateCampaignInput);
let CampaignResolver = class CampaignResolver {
    // query
    async hello() {
        console.log(Web3Token);
        try {
            return "hhhhh";
        }
        catch (error) {
            return response_type_1.catchErr;
        }
    }
    async getCampaigns() {
        const campaigns = await campaign_model_1.CampaignModel.find({ relations: ["user"] });
        return {
            success: true,
            msg: "get all camp",
            data: campaigns,
        };
    }
    // mutation
    async createCampaign({ objective, name }) {
        try {
            const user_id = 1;
            const campaign = await campaign_model_1.CampaignModel.create({
                objective,
                name,
                user_id,
            }).save();
            return {
                success: true,
                msg: "",
                data: campaign,
            };
        }
        catch (error) {
            console.log(error);
            return response_type_1.catchErr;
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => campaign_type_1.CampaignArrResponse, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignResolver.prototype, "getCampaigns", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => campaign_type_1.CampaignObjectResponse, { nullable: true }) // create new campaign
    ,
    __param(0, (0, type_graphql_1.Arg)("CreateCampaignInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCampaignInput]),
    __metadata("design:returntype", Promise)
], CampaignResolver.prototype, "createCampaign", null);
CampaignResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CampaignResolver);
exports.CampaignResolver = CampaignResolver;
//# sourceMappingURL=campaign.resolver.js.map