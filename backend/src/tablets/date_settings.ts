import { Pool } from "pg";

export async function crateTableDateSettings(pool: Pool) {
	const client = await pool.connect();
	const query = `
        CREATE TABLE date_settings (
            id SERIAL PRIMARY KEY,
            date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
            start_date DATE NOT NULL,
            end_date DATE
        );
    `;

	await client.query(query);
	client.release();
}
