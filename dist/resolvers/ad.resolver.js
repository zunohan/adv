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
exports.AdResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ad_model_1 = require("../entities/ad.model");
const campaign_model_1 = require("../entities/campaign.model");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const ad_type_1 = require("../types/ad.type");
const handleError_1 = require("../utils/handleError");
let CreateAdByCampaignInPut = class CreateAdByCampaignInPut {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CreateAdByCampaignInPut.prototype, "campaignId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "buyingModel", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "targetUrl", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "budget", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "bidding", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "format", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "options", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "freCapping", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "schedule", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateAdByCampaignInPut.prototype, "targeting", void 0);
CreateAdByCampaignInPut = __decorate([
    (0, type_graphql_1.InputType)()
], CreateAdByCampaignInPut);
let AdResolver = class AdResolver {
    // query
    async getAds() {
        try {
            return "hhhhh";
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
    async createAdByCampaign({ campaignId, name, buyingModel, targetUrl, budget, bidding, format, options, freCapping, schedule, targeting, }, { req: { user_id } }) {
        try {
            // console.log({
            //     campaignId,
            //     name,
            //     buyingModel,
            //     targetUrl,
            //     budget,
            //     bidding,
            //     format,
            //     options,
            //     freCapping,
            //     schedule,
            //     targeting,
            // })
            const existedAd = await ad_model_1.AdModel.findOneBy({ name });
            if (existedAd)
                return (0, handleError_1.catchErr)("Ad name is existed. Please re-input with another...");
            const ad = ad_model_1.AdModel.create({
                name,
                buying_model: buyingModel,
                target_url: targetUrl,
                budget,
                bidding,
                format,
                options,
                fre_capping: freCapping,
                schedule,
                targeting,
                campaign_id: campaignId,
            });
            const campaign = await campaign_model_1.CampaignModel.findOneBy({ id: campaignId });
            await Promise.all([
                ad.save(),
                campaign_model_1.CampaignModel.update({ id: campaignId }, { totalAd: (campaign === null || campaign === void 0 ? void 0 : campaign.totalAd) + 1 }),
            ]);
            return {
                success: true,
                msg: "Successfully create new Ad",
                data: ad
            };
        }
        catch (error) {
            return (0, handleError_1.catchErr)();
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "getAds", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => ad_type_1.AdObjectResponse) // create new ad
    ,
    (0, type_graphql_1.UseMiddleware)(auth_middleware_1.default),
    __param(0, (0, type_graphql_1.Arg)("CreateAdByCampaignInPut")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAdByCampaignInPut, Object]),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "createAdByCampaign", null);
AdResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdResolver);
exports.AdResolver = AdResolver;
//# sourceMappingURL=ad.resolver.js.map