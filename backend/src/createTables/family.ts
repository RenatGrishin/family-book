import { Pool } from "pg";

export const createFamilyTable = async (pool: Pool) => {
	const query = `
        CREATE TABLE family (
        id SERIAL PRIMARY KEY,
        child_id INT REFERENCES person(id) ON DELETE CASCADE,
        mother_id INT REFERENCES person(id) ON DELETE SET NULL,
        father_id INT REFERENCES person(id) ON DELETE SET NULL,
        kinship_type VARCHAR(50) NOT NULL CHECK (kinship_type IN ('biological', 'adopted', 'foster'))
    );`;

	try {
		await pool.query(query);
		console.log("Таблица person успешно создана");
	} catch (error) {
		console.error("Ошибка при создании таблицы family:", error);
	}
};
