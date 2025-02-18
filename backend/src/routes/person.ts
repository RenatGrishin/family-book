import { Router } from "express";
import { createPersonCntr } from "../controllers/person/personController";

const router = Router();

router.get("/create", createPersonCntr);

export default router;
