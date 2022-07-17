import { Field, Int, ObjectType } from "type-graphql"
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from "typeorm"
import { MaxLength, MinLength } from "class-validator"
import { CampaignObjective, Status } from "../types/enum.type"
import { UserModel } from "./user.model"
import { AdModel } from "./ad.model"

@Entity("adv_campaign")
@ObjectType()
export class CampaignModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    readonly id: number

    @Column({ type: "enum", enum: CampaignObjective })
    @Field(() => String)
    objective: string

    @Column({ type: "varchar", unique: true })
    @Field(() => String)
    @MinLength(4)
    @MaxLength(50)
    name: string

    @Column({ type: "enum", enum: Status, default: Status.Pending })
    @Field(() => String)
    status: Status

    @Column({ type: "int", default: 0 })
    @Field(() => Int)
    totalCampaign: number

    @Column({ type: "int", default: 0 })
    @Field(() => Int)
    totalAd: number

    @Column({ type: "int", name: "user_id" })
    user_id: number

    @ManyToOne(() => UserModel, (user: UserModel) => user.campaigns)
    @JoinColumn({ name: "user_id" })
    @Field(() => UserModel)
    user: UserModel

    @OneToMany(() => AdModel, (ad: AdModel) => ad.campaign, { eager: true, onDelete: "CASCADE" })
    @Field(() => [AdModel])
    ads: AdModel[]

    @CreateDateColumn()
    @Field()
    createdAt: Date

    @UpdateDateColumn()
    @Field()
    updatedAt: Date
}
