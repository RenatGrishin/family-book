import { pool } from "../../db/pool";

export const getAllInfoDataSettingsServices = async () => {
	const query = `SELECT * FROM date_settings;`;

	return pool.query(query);
};

export const addTestInfoDataSettingsSrv = async () => {
	const query = `INSERT INTO date_settings (date_type, start_date) VALUES ('before', '2023-09-15');`;

	pool.query(query);
};
