import { Router } from "express";
import { AttendanceController } from "../controllers/attendance.controller";

const router = Router();

const controller = new AttendanceController();

router.post(
  "/bulk",
  (req, res) => controller.bulkAttendance(req, res)
);

export default router;