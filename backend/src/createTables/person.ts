import { Pool } from "pg";

export const createPersonTable = async (pool: Pool) => {
	const query = `
        CREATE TABLE person (
            id SERIAL PRIMARY KEY,
            gender VARCHAR(50) CHECK (gender IN ('male', 'female') OR gender IS NULL),
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            birth_name VARCHAR(255),
            maiden_name VARCHAR(255),
            birth_date_id INT REFERENCES date_settings(id), -- ссылка на дату рождения
            birthplace VARCHAR(255),
            death_status VARCHAR(50) CHECK (death_status IN ('alive', 'deceased', 'unknown')),
            death_date_id INT REFERENCES date_settings(id), -- ссылка на дату смерти
            death_place VARCHAR(255),
            cause_of_death VARCHAR(255),
            burial_place VARCHAR(255)
        );
    `;

	try {
		await pool.query(query);
		console.log("Таблица person успешно создана");
	} catch (error) {
		console.error("Ошибка при создании таблицы person:", error);
	}
};
