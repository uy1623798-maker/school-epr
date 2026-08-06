import { Router } from "express";
import { HomeworkController } from "../controllers/homework.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";
import upload from "../middlewares/upload.middleware";
const router = Router();

const controller = new HomeworkController();

/**
 * ==========================================
 * CREATE HOMEWORK
 * POST /api/v1/homeworks
 * ==========================================
 */
router.post(
  "/",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN", "TEACHER"),
  upload.single("attachment"),
  controller.create.bind(controller)
);

/**
 * ==========================================
 * GET ALL HOMEWORK
 * GET /api/v1/homeworks
 * ==========================================
 */
router.get(
  "/",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.getAll.bind(controller)
);

/**
 * ==========================================
 * GET HOMEWORK BY ID
 * GET /api/v1/homeworks/:id
 * ==========================================
 */
router.get(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.getById.bind(controller)
);

/**
 * ==========================================
 * UPDATE HOMEWORK
 * PUT /api/v1/homeworks/:id
 * ==========================================
 */
router.put(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER"
  ),
  controller.update.bind(controller)
);

/**
 * ==========================================
 * DELETE HOMEWORK
 * DELETE /api/v1/homeworks/:id
 * ==========================================
 */
router.delete(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER"
  ),
  controller.delete.bind(controller)
);

/**
 * ==========================================
 * SUBMIT HOMEWORK
 * POST /api/v1/homeworks/submit
 * ==========================================
 */
router.post(
  "/submit",
  authenticate,
  authorize("STUDENT"),
  controller.submit.bind(controller)
);

/**
 * ==========================================
 * TEACHER HOMEWORK
 * GET /api/v1/homeworks/teacher/:teacherId
 * ==========================================
 */
router.get(
  "/teacher/:teacherId",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER"
  ),
  controller.teacherHomework.bind(controller)
);

/**
 * ==========================================
 * STUDENT HOMEWORK
 * GET /api/v1/homeworks/student/:studentId
 * ==========================================
 */
router.get(
  "/student/:studentId",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.studentHomework.bind(controller)
);

export default router;