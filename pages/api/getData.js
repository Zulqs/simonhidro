import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {
    // Fetch all data from the monitoring table
    const data = await sql`SELECT * FROM monitoring;`;
    
    return response.status(200).json({ data });
    } catch (error) {
    return response.status(500).json({ error: error.message });
    }
}
