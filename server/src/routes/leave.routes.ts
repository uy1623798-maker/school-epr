import { Router } from "express";

import { LeaveController } from "../controllers/leave.controller";

import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/role.middleware";

import upload from "../middlewares/upload.middleware";

const router = Router();

const controller = new LeaveController();

/**
 * ===========================================
 * APPLY LEAVE
 * ===========================================
 */

router.post(
  "/",
  authenticate,
  upload.single("attachment"),
  controller.create.bind(controller)
);

/**
 * ===========================================
 * GET ALL LEAVES
 * ===========================================
 */

router.get(
  "/",
  authenticate,
  controller.getAll.bind(controller)
);

/**
 * ===========================================
 * GET LEAVE BY ID
 * ===========================================
 */

router.get(
  "/:id",
  authenticate,
  controller.getById.bind(controller)
);

/**
 * ===========================================
 * UPDATE LEAVE
 * ===========================================
 */

router.put(
  "/:id",
  authenticate,
  upload.single("attachment"),
  controller.update.bind(controller)
);

/**
 * ===========================================
 * DELETE LEAVE
 * ===========================================
 */

router.delete(
  "/:id",
  authenticate,
  controller.delete.bind(controller)
);

/**
 * ===========================================
 * APPROVE LEAVE
 * ===========================================
 */

router.put(
  "/:id/approve",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.approve.bind(controller)
);

/**
 * ===========================================
 * REJECT LEAVE
 * ===========================================
 */

router.put(
  "/:id/reject",
  authenticate,
  authorize("SUPER_ADMIN", "SCHOOL_ADMIN"),
  controller.reject.bind(controller)
);

export default router;