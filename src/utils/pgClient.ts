import { Client } from "pg"
const client = new Client(process.env.DB_URL)

export const query = async (q: string) => {
    const result = await client.query(q)
    await client.end()
    return result
}
