import { Request, Response } from "express";
import { pool } from "../../db/pool";

export const getTables = async (req: Request, res: Response) => {
	try {
		const query = `
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            ORDER BY table_name;
	  `;

		const result = await pool.query(query);
		res.json(result.rows);
	} catch (err) {
		console.error("Ошибка при получении списка таблиц:", err);
		res.status(500).json({ error: "Ошибка при получении списка таблиц" });
	}
};
