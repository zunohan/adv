import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm"
import { Field, Int, ObjectType } from "type-graphql"
import { MaxLength, MinLength } from "class-validator"
import { BuyingModel, Format, Status } from "../types/enum.type"
import { CampaignModel } from "./campaign.model"

@Entity("adv_ad")
@ObjectType()
export class AdModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    readonly id: number

    @Column({ type: "varchar", unique: true })
    @Field(() => String)
    @MinLength(4)
    @MaxLength(50)
    name: string

    @Column({ type: "enum", enum: BuyingModel, default: BuyingModel.CPM })
    @Field()
    buyingModel: string

    @Column()
    @Field()
    target_url: string

    @Field()
    budget: string // "500:lifetime"

    @Column()
    @Field(() => Int)
    bidding: number

    @Column({ type: "enum", enum: Format })
    @Field()
    format: string // "feed" | "display" | "vast" | "extention",

    @Column({ type: "text" })
    @Field()
    options?: string

    @Column({ type: "varchar" })
    @Field()
    fre_capping: string // "6:h", "5:d", "1:w"

    @Column({ type: "varchar" })
    @Field()
    schedule: string // "{starttime}:{endtime}" ---> "62346234:05406546"

    @Column({ type: "text" })
    @Field()
    targeting?: string

    // targeting: {
    //     location: "all" | {
    //         type: "exc",
    //         data: ["xxx"]
    //     },
    //     gender: "all"
    //     age: "all" ["22-44", "45"]
    //     device: "all"
    //     browser: "all"
    //     system: "all"
    //     interest: {
    //         type: "inc",
    //         data: ["automative", "business"]
    //     }
    // }

    @Column({ type: "enum", enum: Status, default: Status.Pending })
    @Field(() => String)
    status: Status

    @Column({ type: "int", name: "campaign_id" })
    campaign_id: number

    @ManyToOne(() => CampaignModel, (campaign: CampaignModel) => campaign.ads)
    @JoinColumn({ name: "campaign_id" })
    @Field(() => CampaignModel)
    campaign: CampaignModel

    @CreateDateColumn()
    @Field()
    createdAt: Date

    @UpdateDateColumn()
    @Field()
    updatedAt: Date
}
