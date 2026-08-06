import { Router } from "express";
import { SectionController } from "../controllers/section.controller";

const router = Router();
const controller = new SectionController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));

export default router;