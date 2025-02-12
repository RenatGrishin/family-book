import { Response, Request } from "express";
import { pool } from "../../db/pool";

export const createDataSetings = async (req: Request, res: Response) => {
	try {
		const query = `
			CREATE TABLE date_settings (
			id SERIAL PRIMARY KEY,
			date_type VARCHAR(50) NOT NULL CHECK (date_type IN ('exact', 'approximate', 'before', 'after', 'between')),
			start_date DATE NOT NULL,
			end_date DATE
			);
	  	`;
		await pool.query(query);
		res.status(201).json({
			message: "Таблица date_settings успешно создана",
		});
	} catch (err) {
		console.error("Ошибка при создании таблицы:", err);
		res.status(500).json({ error: "Ошибка при создании таблицы" });
	}
};
