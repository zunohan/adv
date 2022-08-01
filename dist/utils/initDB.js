"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const initDatabase = async () => {
    try {
        const AppDataSource = new typeorm_1.DataSource({
            type: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            // url: process.env.DB_URL,
            synchronize: true,
            entities: ["/src/entities/*.model.ts"],
        });
        await AppDataSource.initialize();
        console.log("🚀 Connect to POSTGRESQL - ADV inside docker 🚀");
    }
    catch (error) {
        console.log("🚀 POSTGRESQL failed 🚀");
        process.exit(1);
    }
};
exports.default = initDatabase;
//# sourceMappingURL=initDB.js.map