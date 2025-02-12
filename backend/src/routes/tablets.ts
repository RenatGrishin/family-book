import { Router } from "express";
import { getTables } from "../controllers/tablets/getTablets";
import { deleteTablet } from "../controllers/tablets/deleteTablets";

const router = Router();

router.get("/get", getTables);
router.get("/delete", deleteTablet);

export default router;
