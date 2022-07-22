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
exports.AdModel = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const enum_type_1 = require("../types/enum.type");
const campaign_model_1 = require("./campaign.model");
let AdModel = class AdModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], AdModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], AdModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_type_1.BuyingModel, default: enum_type_1.BuyingModel.CPM }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "buying_model", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "target_url", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "bidding", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_type_1.Format }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "format", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AdModel.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "fre_capping", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdModel.prototype, "schedule", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], AdModel.prototype, "targeting", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_type_1.Status, default: enum_type_1.Status.Pending }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], AdModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "campaign_id" }),
    __metadata("design:type", Number)
], AdModel.prototype, "campaign_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => campaign_model_1.CampaignModel, (campaign) => campaign.ads),
    (0, typeorm_1.JoinColumn)({ name: "campaign_id" }),
    (0, type_graphql_1.Field)(() => campaign_model_1.CampaignModel),
    __metadata("design:type", campaign_model_1.CampaignModel)
], AdModel.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], AdModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], AdModel.prototype, "updatedAt", void 0);
AdModel = __decorate([
    (0, typeorm_1.Entity)("adv_ad"),
    (0, type_graphql_1.ObjectType)()
], AdModel);
exports.AdModel = AdModel;
//# sourceMappingURL=ad.model.js.map