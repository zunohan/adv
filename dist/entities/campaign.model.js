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
exports.CampaignModel = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const enum_type_1 = require("../types/enum.type");
const user_model_1 = require("./user.model");
const ad_model_1 = require("./ad.model");
let CampaignModel = class CampaignModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CampaignModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_type_1.CampaignObjective }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CampaignModel.prototype, "objective", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CampaignModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_type_1.Status, default: enum_type_1.Status.Pending }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CampaignModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CampaignModel.prototype, "totalCampaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0 }),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CampaignModel.prototype, "totalAd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "user_id" }),
    __metadata("design:type", Number)
], CampaignModel.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.UserModel, (user) => user.campaigns),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    (0, type_graphql_1.Field)(() => user_model_1.UserModel),
    __metadata("design:type", user_model_1.UserModel)
], CampaignModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ad_model_1.AdModel, (ad) => ad.campaign, { eager: true, onDelete: "CASCADE" }),
    (0, type_graphql_1.Field)(() => [ad_model_1.AdModel]),
    __metadata("design:type", Array)
], CampaignModel.prototype, "ads", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CampaignModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CampaignModel.prototype, "updatedAt", void 0);
CampaignModel = __decorate([
    (0, typeorm_1.Entity)("adv_campaign"),
    (0, type_graphql_1.ObjectType)()
], CampaignModel);
exports.CampaignModel = CampaignModel;
//# sourceMappingURL=campaign.model.js.map