import { DataSource } from "typeorm"
import { UserModel } from "../entities/user.model"
import { CampaignModel } from "../entities/campaign.model"
import { AdModel } from "../entities/ad.model"

const initDatabase = async () => {
    try {
        const AppDataSource = new DataSource({
            type: "postgres",
            url: process.env.DB_URL,
            synchronize: true,
            entities: [UserModel, CampaignModel, AdModel],
        })
        await AppDataSource.initialize()
        console.log("🚀 Connect to POSTGRESQL inside docker 🚀")
    } catch (error) {
        console.log("🚀 POSTGRESQL failed 🚀")
        process.exit(1)
    }
}

export default initDatabase
