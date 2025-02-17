import { pool } from "../../db/pool";

export const createPersonTable = async () => {
	const query = `CREATE TABLE person (
        id SERIAL PRIMARY KEY,
        gender VARCHAR(50) CHECK (gender IN ('male', 'female')),
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        birth_name VARCHAR(255),
        maiden_name VARCHAR(255),
        birth_date_id INT REFERENCES date_settings(id), -- ссылка на дату рождения
        birthplace VARCHAR(255),
        death_date_id INT REFERENCES date_settings(id), -- ссылка на дату смерти
        death_place VARCHAR(255),
        cause_of_death VARCHAR(255),
        burial_place VARCHAR(255)
    );`;

	pool.query(query);
};
