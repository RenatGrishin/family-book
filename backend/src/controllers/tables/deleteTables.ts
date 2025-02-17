import { Request, Response } from "express";
import { pool } from "../../db/pool";
import { dropAllTablesSecvices } from "../../services/tables/tablesService";

export const deleteTable = async (req: Request, res: Response) => {
	try {
		dropAllTablesSecvices();

		res.status(200).json({
			message: `Таблица date_settings успешно удалена`,
		});
	} catch (err) {
		res.status(201).json({
			error: "Ошибка при удалении таблицы",
		});
	}
};
