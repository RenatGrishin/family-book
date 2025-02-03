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

export type TEditPersonTable = {
	gender: "male" | "female" | "";
	first_name: string;
	last_name: string;
	birth_name?: string;
	maiden_name?: string;
	birth_date_id?: number;
	birthplace?: string;
	death_status?: string;
	death_date_id?: number;
	death_place?: string;
	cause_of_death?: string;
	burial_place?: string;
};
export const editPersonTable = async (
	pool: Pool,
	setInfo: TEditPersonTable
) => {
	const query = `
    INSERT INTO person (
      gender, 
      first_name, 
      last_name, 
      birth_name, 
      maiden_name, 
      birth_date_id, 
      birthplace, 
      death_status, 
      death_date_id, 
      death_place, 
      cause_of_death, 
      burial_place
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
    );
  `;
	const values = [
		setInfo.gender,
		setInfo.first_name,
		setInfo.last_name,
		setInfo.birth_name || null,
		setInfo.maiden_name || null,
		setInfo.birth_date_id || null,
		setInfo.birthplace || null,
		setInfo.death_status || null,
		setInfo.death_date_id || null,
		setInfo.death_place || null,
		setInfo.cause_of_death || null,
		setInfo.burial_place || null,
	];

	try {
		// Выполнение запроса
		await pool.query(query, values);
		console.log("Информация успешно добавлена");
	} catch (error) {
		console.error("Ошибка при добавлении информации:", error);
		throw error;
	}
};
