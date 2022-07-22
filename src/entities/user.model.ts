import { Field, Int, ObjectType } from "type-graphql"
import { IsEmail, MaxLength, Min, MinLength } from "class-validator"
import { CampaignModel } from "./campaign.model"
import { Role, UserStatus } from "../types/enum.type"
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity("adv_user")
@ObjectType()
export class UserModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    readonly id: number

    @Column({ type: "varchar", unique: true })
    @Field(() => String)
    @IsEmail()
    email: string

    @Column({ type: "varchar" })
    @Field({ nullable: true })
    @MinLength(4)
    @MaxLength(20)
    name: string

    @Column({ type: "enum", enum: Role, default: Role.Advertiser })
    @Field(() => String)
    role: Role

    @Column({ type: "text", unique: true })
    @Field(() => String)
    address: string

    @Column({ type: "enum", enum: UserStatus, default: UserStatus.Active })
    @Field(() => String)
    status: UserStatus

    @Column({ type: "int", default: 0 })
    @Field(() => Int)
    @Min(0)
    totalCampaign: number

    @OneToMany(() => CampaignModel, (campaign: CampaignModel) => campaign.user, {
        eager: true,
        onDelete: "CASCADE",
    })
    @Field(() => [CampaignModel])
    campaigns: CampaignModel[]

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
