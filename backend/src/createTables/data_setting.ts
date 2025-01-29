import { Pool } from "pg";

export const createDateSettingsTable = async (pool: Pool) => {
	const query = `
    CREATE TABLE IF NOT EXISTS date_settings (
        id SERIAL PRIMARY KEY,
        date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
        start_date DATE NOT NULL,
        end_date DATE
    );
    `;

	try {
		await pool.query(query);
		console.log("Таблица date_settings успешно создана");
	} catch (error) {
		console.error("Ошибка при создании таблицы date_settings:", error);
	}
};
