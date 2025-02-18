import { Router } from "express";
import {
	createDataSetings,
	getAllInfoDataSettingsCntrl,
	addTestInfoDataSettingsCntrl,
} from "../controllers/dateSettings/createDataSetings";

const router = Router();

router.get("/create", createDataSetings);
router.get("/get", getAllInfoDataSettingsCntrl);
router.get("/addTest", addTestInfoDataSettingsCntrl);

export default router;
