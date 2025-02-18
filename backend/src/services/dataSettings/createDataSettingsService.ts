import { pool } from "../../db/pool";

export const createDataSettingsService = async () => {
	const query = `
        CREATE TABLE date_settings (
        id SERIAL PRIMARY KEY,
        date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
        start_date DATE NOT NULL,
        end_date DATE
        );
    `;

	await pool.query(query);
};
