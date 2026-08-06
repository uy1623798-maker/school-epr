import { Router } from "express";

import { TCController } from "../controllers/tc.controller";

import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";

import upload from "../middlewares/upload.middleware";

const router = Router();

const controller = new TCController();

/**
 * ==========================================
 * CREATE TC REQUEST
 * ==========================================
 */

router.post(
  "/",
  authenticate,
  authorize("TEACHER", "SCHOOL_ADMIN", "SUPER_ADMIN"),
  upload.single("document"),
  controller.create.bind(controller)
);

/**
 * ==========================================
 * GET ALL TC
 * ==========================================
 */

router.get(
  "/",
  authenticate,
  authorize("TEACHER", "SCHOOL_ADMIN", "SUPER_ADMIN"),
  controller.getAll.bind(controller)
);

/**
 * ==========================================
 * DASHBOARD
 * ==========================================
 */

router.get(
  "/dashboard",
  authenticate,
  authorize("SCHOOL_ADMIN", "SUPER_ADMIN"),
  controller.dashboard.bind(controller)
);

/**
 * ==========================================
 * GET TC BY ID
 * ==========================================
 */

router.get(
  "/:id",
  authenticate,
  controller.getById.bind(controller)
);

/**
 * ==========================================
 * UPDATE TC
 * ==========================================
 */

router.put(
  "/:id",
  authenticate,
  authorize("TEACHER", "SCHOOL_ADMIN", "SUPER_ADMIN"),
  upload.single("document"),
  controller.update.bind(controller)
);

/**
 * ==========================================
 * DELETE TC
 * ==========================================
 */

router.delete(
  "/:id",
  authenticate,
  authorize("SCHOOL_ADMIN", "SUPER_ADMIN"),
  controller.delete.bind(controller)
);

/**
 * ==========================================
 * APPROVE TC
 * ==========================================
 */

router.put(
  "/:id/approve",
  authenticate,
  authorize("SCHOOL_ADMIN", "SUPER_ADMIN"),
  controller.approve.bind(controller)
);

/**
 * ==========================================
 * REJECT TC
 * ==========================================
 */

router.put(
  "/:id/reject",
  authenticate,
  authorize("SCHOOL_ADMIN", "SUPER_ADMIN"),
  controller.reject.bind(controller)
);
/**
 * VERIFY TC
 */

router.get(
  "/verify/:id",
  controller.verify.bind(controller)
);

/**
 * DOWNLOAD PDF
 */

router.get(
  "/download/:id",
  authenticate,
  controller.download.bind(controller)
);

export default router;