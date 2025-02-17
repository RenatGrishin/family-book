import { Response, Request } from "express";
import { createDataSettingsService } from "../../services/dataSettings/createDataSettingsService";

export const createDataSetings = async (req: Request, res: Response) => {
	try {
		await createDataSettingsService();
		res.status(201).json({
			message: "Таблица date_settings успешно создана",
		});
	} catch (err) {
		console.error("Ошибка при создании таблицы:", err);
		res.status(500).json({ error: "Ошибка при создании таблицы" });
	}
};
