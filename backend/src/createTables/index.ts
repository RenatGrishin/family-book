import { Pool } from "pg";
import { createDateSettingsTable } from "./data_setting";
import { createPersonTable } from "./person";
import { createFamilyTable } from "./family";
import { createMarriageTable } from "./marriage";

export const createTablesDateSettings = async (pool: Pool) => {
	createDateSettingsTable(pool);
};
export const createTablePerson = async (pool: Pool) => {
	createPersonTable(pool);
};

export const createTableFamily = async (pool: Pool) => {
	createFamilyTable(pool);
};

export const createTableMarriage = async (pool: Pool) => {
	createMarriageTable(pool);
};

export const getTables = async (pool: Pool) => {
	const query = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'; -- Только публичные таблицы
    `;

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error("Ошибка при получении списка таблиц:", error);
		return [];
	}
};

export const deleteTablet = async (pool: Pool, table: string) => {
	const query = `DROP TABLE IF EXISTS ${table};`;

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const checkTables = async (
	pool: Pool,
	tables: { table_name: string }[]
): Promise<{ result: string }> => {
	let result = "";

	const tablesCheck: { [key: string]: boolean } = {
		date_settings: false,
		person: false,
		family: false,
		marriage: false,
	};

	tables.map((elem) => {
		tablesCheck[elem.table_name] = true;
	});

	for (const key in tablesCheck) {
		if (tablesCheck[key]) continue;

		if (!result) {
			result = `Создаем таблицы: ${key}`;
		} else {
			result = result + `, ${key}`;
		}

		switch (key) {
			case "date_settings":
				await createTablesDateSettings(pool);
				break;
			case "person":
				await createTablePerson(pool);
				break;
			case "family":
				await createTableFamily(pool);
				break;
			case "marriage":
				await createTableMarriage(pool);
				break;
		}
	}

	return { result: result };
};
