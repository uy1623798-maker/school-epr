import { Router } from "express";
import { SchoolController } from "../controllers/school.controller";

const router = Router();

const controller = new SchoolController();

router.post("/", (req, res) => controller.create(req, res));

router.get("/", (req, res) => controller.getAll(req, res));

export default router;