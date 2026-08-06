import { Router } from "express";
import { TeacherController } from "../controllers/teacher.controller";
import upload from "../middlewares/upload.middleware";

const router = Router();

const controller = new TeacherController();

router.post(
  "/",
  upload.single("profileImage"),
  (req, res) => controller.create(req, res)
);

router.get("/", (req, res) => controller.getAll(req, res));

router.get("/:id", (req, res) => controller.getById(req, res));

router.put(
  "/:id",
  upload.single("profileImage"),
  (req, res) => controller.update(req, res)
);

router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;