import { Router } from "express";

import { AttendanceController } from "../controllers/attendance.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();
const controller = new AttendanceController();

/**
 * Teacher/Admin: class attendance save
 */
router.post(
  "/bulk",
  authenticate,
  (req, res) => controller.bulkAttendance(req, res),
);

/**
 * Student/Teacher/Admin: one student's attendance
 */
router.get(
  "/student/:studentId",
  authenticate,
  (req, res) => controller.getStudentAttendance(req, res),
);

export default router;