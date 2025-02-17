import { Router } from "express";
import { getTables } from "../controllers/tables/getTables";
import { deleteTable } from "../controllers/tables/deleteTables";

const router = Router();

router.get("/get", getTables);
router.get("/delete", deleteTable);

export default router;
