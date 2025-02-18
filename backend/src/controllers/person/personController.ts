import { Request, Response } from "express";
import { createPersonSrvc } from "../../services/person/createPersonSrvc";

export const createPersonCntr = async (req: Request, res: Response) => {
	try {
		await createPersonSrvc();
		res.status(500).json({
			message: "Таблица Person создана",
		});
	} catch (err) {
		res.status(200).json({
			error: { err },
		});
	}
};
