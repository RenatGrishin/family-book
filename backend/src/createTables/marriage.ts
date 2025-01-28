import { Pool } from "pg";

export const createMarriageTable = async (pool: Pool) => {
	const query = `
        CREATE TABLE marriage (
            id SERIAL PRIMARY KEY,
            person_id INT REFERENCES person(id) ON DELETE CASCADE,
            spouse_id INT REFERENCES person(id) ON DELETE SET NULL,
            relationship_status VARCHAR(50) NOT NULL CHECK (relationship_status IN (
                'married', 'divorced', 'separated', 'spouse_deceased', 'engaged', 
                'dating', 'annulled', 'unknown', 'other'
            )),
            marriage_place VARCHAR(255),
            marriage_start_date_id INT REFERENCES date_settings(id),
            marriage_end_date_id INT REFERENCES date_settings(id)
        );
    `;

	try {
		await pool.query(query);
		console.log("Таблица person успешно создана");
	} catch (error) {
		console.error("Ошибка при создании таблицы marriage:", error);
	}
};
