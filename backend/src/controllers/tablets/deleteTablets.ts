import { Request, Response } from "express";
import { pool } from "../../db/pool";

export const deleteTablet = async (req: Request, res: Response) => {
	try {
		const query = `DROP TABLE IF EXISTS date_settings;`;

		pool.query(query);
		res.status(200).json({
			message: `Таблица date_settings успешно удалена`,
		});
	} catch (err) {
		res.status(201).json({
			error: "Ошибка при удалении таблицы",
		});
	}
};
