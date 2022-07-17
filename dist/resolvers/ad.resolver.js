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
exports.AdResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ad_type_1 = require("../types/ad.type");
const response_type_1 = require("../types/response.type");
let AdResolver = class AdResolver {
    // query
    async getAds() {
        try {
            return "hhhhh";
        }
        catch (error) {
            return response_type_1.catchErr;
        }
    }
    async createAdByCampaign() {
        try {
        }
        catch (error) {
            return response_type_1.catchErr;
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
    (0, type_graphql_1.Mutation)(() => ad_type_1.AdObjectResponse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdResolver.prototype, "createAdByCampaign", null);
AdResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AdResolver);
exports.AdResolver = AdResolver;
//# sourceMappingURL=ad.resolver.js.map