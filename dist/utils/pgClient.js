"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const pg_1 = require("pg");
const client = new pg_1.Client(process.env.DB_URL);
const query = async (q) => {
    const result = await client.query(q);
    await client.end();
    return result;
};
exports.query = query;
//# sourceMappingURL=pgClient.js.map