import { Pool } from "pg";

export async function crateTableDateSettings(pool: Pool) {
	const query = `
        CREATE TABLE date_settings (
            id SERIAL PRIMARY KEY,
            date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
            start_date DATE NOT NULL,
            end_date DATE
        );
    `;

	try {
		const result = await pool.query(query);
		return result;
	} catch (error) {
		console.log("Ошибка при создании таблицы date_settings: " + error);
	}
}
