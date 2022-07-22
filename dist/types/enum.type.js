"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = exports.BuyingModel = exports.Status = exports.CampaignObjective = exports.UserStatus = exports.Role = void 0;
const type_graphql_1 = require("type-graphql");
// user role
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Advertiser"] = "Advertiser";
})(Role = exports.Role || (exports.Role = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "Active";
    UserStatus["Inactive"] = "Inactive";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
// campaign objective
var CampaignObjective;
(function (CampaignObjective) {
    CampaignObjective["Traffic"] = "Traffic";
    CampaignObjective["Reach"] = "Reach";
})(CampaignObjective = exports.CampaignObjective || (exports.CampaignObjective = {}));
// campaign status
var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Pending"] = "Pending";
    Status["Paused"] = "Paused";
    Status["Stopped"] = "Stopped";
    Status["Rejected"] = "Rejected";
})(Status = exports.Status || (exports.Status = {}));
// buying model
var BuyingModel;
(function (BuyingModel) {
    BuyingModel["CPM"] = "CPM";
    BuyingModel["CPC"] = "CPC";
    BuyingModel["CPA"] = "CPA";
})(BuyingModel = exports.BuyingModel || (exports.BuyingModel = {}));
var Format;
(function (Format) {
    Format["feed"] = "feed";
    Format["display"] = "display";
    Format["vast"] = "vast";
    Format["extention"] = "extention";
})(Format = exports.Format || (exports.Format = {}));
(0, type_graphql_1.registerEnumType)(Role, {
    name: "User role",
    description: "Admin/Adv/Pub",
});
(0, type_graphql_1.registerEnumType)(UserStatus, {
    name: "User status",
    description: "Active/Inactive",
});
(0, type_graphql_1.registerEnumType)(BuyingModel, {
    name: "Buying model for Adv",
    description: "Buying model for Adv",
});
(0, type_graphql_1.registerEnumType)(Format, {
    name: "Format ad",
    description: "Format ad",
});
(0, type_graphql_1.registerEnumType)(CampaignObjective, {
    name: "Campaign Objective",
    description: "Campaign Objective",
});
(0, type_graphql_1.registerEnumType)(Status, {
    name: "Campaign/Ad Status",
    description: "Campaign/Ad Status",
});
//# sourceMappingURL=enum.type.js.map