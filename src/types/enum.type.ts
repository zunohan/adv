import { registerEnumType } from "type-graphql"

// user role
export enum Role {
    Admin = "Admin",
    Advertiser = "Advertiser",
}

// campaign objective
export enum CampaignObjective {
    Traffic = "Traffic",
    Reach = "Reach",
}

// campaign status
export enum Status {
    Active = "Active",
    Pending = "Pending",
    Paused = "Paused",
    Stopped = "Stopped",
    Rejected = "Rejected",
}

// buying model
export enum BuyingModel {
    CPM = "CPM",
    CPC = "CPC",
    CPA = "CPA",
}

export enum Format {
    feed = "feed",
    display = "display",
    vast = "vast",
    extention = "extention",
}

registerEnumType(Role, {
    name: "User role",
    description: "Admin/Adv/Pub",
})

registerEnumType(BuyingModel, {
    name: "Buying model for Adv",
    description: "Buying model for Adv",
})

registerEnumType(Format, {
    name: "Format ad",
    description: "Format ad",
})

registerEnumType(CampaignObjective, {
    name: "Campaign Objective",
    description: "Campaign Objective",
})

registerEnumType(Status, {
    name: "Campaign/Ad Status",
    description: "Campaign/Ad Status",
})
