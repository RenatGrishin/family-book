import { Response, Request } from "express";
import { createDataSettingsService } from "../../services/dataSettings/createDataSettingsService";
import {
	getAllInfoDataSettingsServices,
	addTestInfoDataSettingsSrv,
} from "../../services/dataSettings/dataSettingsService";

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

export const getAllInfoDataSettingsCntrl = async (
	req: Request,
	res: Response
) => {
	try {
		const result = await getAllInfoDataSettingsServices();
		res.json(result.rows);
	} catch (err) {
		res.status(500).json({
			error: "Неудалось получть информацию из таблицы",
		});
	}
};

export const addTestInfoDataSettingsCntrl = async (
	req: Request,
	res: Response
) => {
	try {
		addTestInfoDataSettingsSrv();
		res.status(500).json({ message: "Запись добавлена" });
	} catch (err) {
		res.status(500).json({
			error: "Неудалось добавить информацию",
		});
	}
};
