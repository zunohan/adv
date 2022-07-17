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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignObjectResponse = exports.CampaignArrResponse = void 0;
const type_graphql_1 = require("type-graphql");
const response_type_1 = require("./response.type");
const campaign_model_1 = require("../entities/campaign.model");
// Array/Collection
let CampaignArrResponse = class CampaignArrResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [campaign_model_1.CampaignModel], { nullable: true }),
    __metadata("design:type", Array)
], CampaignArrResponse.prototype, "data", void 0);
CampaignArrResponse = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: response_type_1.IResponse })
], CampaignArrResponse);
exports.CampaignArrResponse = CampaignArrResponse;
// Single
let CampaignObjectResponse = class CampaignObjectResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => campaign_model_1.CampaignModel, { nullable: true }),
    __metadata("design:type", campaign_model_1.CampaignModel)
], CampaignObjectResponse.prototype, "data", void 0);
CampaignObjectResponse = __decorate([
    (0, type_graphql_1.ObjectType)({ implements: response_type_1.IResponse })
], CampaignObjectResponse);
exports.CampaignObjectResponse = CampaignObjectResponse;
//# sourceMappingURL=campaign.type.js.map