import { pool } from "../../db/pool";

export const dropAllTablesSecvices = async () => {
	const query = `DROP TABLE IF EXISTS date_settings;`;

	pool.query(query);
};
