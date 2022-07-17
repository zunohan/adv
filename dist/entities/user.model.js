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
exports.UserModel = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const campaign_model_1 = require("./campaign.model");
const enum_type_1 = require("../types/enum.type");
const typeorm_1 = require("typeorm");
let UserModel = class UserModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], UserModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    (0, type_graphql_1.Field)(() => String),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UserModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: enum_type_1.Role, default: enum_type_1.Role.Advertiser }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserModel.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", unique: true }),
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserModel.prototype, "wallet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => campaign_model_1.CampaignModel, (campaign) => campaign.user, {
        eager: true,
        onDelete: "CASCADE",
    }),
    (0, type_graphql_1.Field)(() => [campaign_model_1.CampaignModel]),
    __metadata("design:type", Array)
], UserModel.prototype, "campaigns", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], UserModel.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], UserModel.prototype, "updatedAt", void 0);
UserModel = __decorate([
    (0, typeorm_1.Entity)("adv_user"),
    (0, type_graphql_1.ObjectType)()
], UserModel);
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map