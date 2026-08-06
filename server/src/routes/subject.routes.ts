import { Router } from "express";
import { SubjectController } from "../controllers/subject.controller";

const router = Router();
const controller = new SubjectController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));

export default router;