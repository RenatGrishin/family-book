import { Router } from "express";
import { getTables } from "../controllers/tablets/getTablets";

const router = Router();

router.get("/get", getTables);

export default router;
