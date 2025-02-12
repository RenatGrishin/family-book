import { Router } from "express";
import { createDataSetings } from "../controllers/dateSettings/createDataSetings";

const router = Router();

router.get("/create", createDataSetings);

export default router;
