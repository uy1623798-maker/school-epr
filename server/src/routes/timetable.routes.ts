import { Router } from "express";
import { TimetableController } from "../controllers/timetable.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";

const router = Router();

const controller = new TimetableController();

/**
 * ==========================================
 * CREATE TIMETABLE
 * POST /api/v1/timetables
 * ==========================================
 */
router.post(
  "/",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.create.bind(controller)
);

/**
 * ==========================================
 * GET ALL TIMETABLES
 * GET /api/v1/timetables
 * ==========================================
 */
router.get(
  "/",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER"
  ),
  controller.getAll.bind(controller)
);

/**
 * ==========================================
 * GET WEEKLY TIMETABLE
 * GET /api/v1/timetables/weekly
 * ==========================================
 */
router.get(
  "/weekly",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.weekly.bind(controller)
);

/**
 * ==========================================
 * GET TODAY TIMETABLE
 * GET /api/v1/timetables/today?day=MONDAY
 * ==========================================
 */
router.get(
  "/today",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.today.bind(controller)
);

/**
 * ==========================================
 * GET TEACHER TIMETABLE
 * GET /api/v1/timetables/teacher/:teacherId
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
  controller.getTeacherTimetable.bind(controller)
);

/**
 * ==========================================
 * GET CLASS TIMETABLE
 * GET /api/v1/timetables/class/:classId
 * ==========================================
 */
router.get(
  "/class/:classId",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.getClassTimetable.bind(controller)
);

/**
 * ==========================================
 * GET SECTION TIMETABLE
 * GET /api/v1/timetables/section/:sectionId
 * ==========================================
 */
router.get(
  "/section/:sectionId",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER",
    "STUDENT"
  ),
  controller.getSectionTimetable.bind(controller)
);

/**
 * ==========================================
 * GET TIMETABLE BY ID
 * GET /api/v1/timetables/:id
 * ==========================================
 */
router.get(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN",
    "TEACHER"
  ),
  controller.getById.bind(controller)
);

/**
 * ==========================================
 * UPDATE TIMETABLE
 * PUT /api/v1/timetables/:id
 * ==========================================
 */
router.put(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN"
  ),
  controller.update.bind(controller)
);

/**
 * ==========================================
 * DELETE TIMETABLE
 * DELETE /api/v1/timetables/:id
 * ==========================================
 */
router.delete(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "SCHOOL_ADMIN"
  ),
  controller.delete.bind(controller)
);

export default router;