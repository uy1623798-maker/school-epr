import { Router } from "express";

import { TeacherAssignmentController } from "../controllers/teacher-assignment.controller";

import { authenticate } from "../middlewares/auth.middleware";

import { authorize } from "../middlewares/role.middleware";

const router = Router();

const controller = new TeacherAssignmentController();

/**
 * ===============================
 * CREATE ASSIGNMENT
 * ===============================
 */

router.post(
  "/",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.create.bind(controller)
);

/**
 * ===============================
 * GET ALL ASSIGNMENTS
 * ===============================
 */

router.get(
  "/",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.getAll.bind(controller)
);

/**
 * ===============================
 * GET ASSIGNMENT BY TEACHER
 * ===============================
 */

router.get(
  "/:teacherId",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN", "TEACHER"),
  controller.getByTeacher.bind(controller)
);

/**
 * ===============================
 * UPDATE ASSIGNMENT
 * ===============================
 */

router.put(
  "/:teacherId",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.update.bind(controller)
);

/**
 * ===============================
 * DELETE ASSIGNMENT
 * ===============================
 */

router.delete(
  "/:teacherId",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.delete.bind(controller)
);

export default router;