import { Request, Response } from "express";

import { LeaveService } from "../services/leave.service";

import {
  createLeaveSchema,
  updateLeaveSchema,
} from "../validators/leave.validator";

const service = new LeaveService();

export class LeaveController {

  // ==========================================
  // CREATE
  // ==========================================

  async create(req: Request, res: Response) {

    try {

      const attachment = req.file?.filename;

      const validatedData = createLeaveSchema.parse({

        ...req.body,

        attachment,

      });

      const leave = await service.create(validatedData);

      return res.status(201).json({

        success: true,

        message: "Leave Applied Successfully",

        data: leave,

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.errors ?? error.message,

      });

    }

  }

  // ==========================================
  // GET ALL
  // ==========================================

  async getAll(req: Request, res: Response) {

    try {

      const data = await service.getAll({

        page: Number(req.query.page) || 1,

        limit: Number(req.query.limit) || 10,

        status: req.query.status as any,

        leaveType: req.query.leaveType as any,

        userId: req.query.userId as string,

        schoolId: req.query.schoolId as string,

        search: req.query.search as string,

      });

      return res.json({

        success: true,

        ...data,

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message,

      });

    }

  }

  // ==========================================
  // GET BY ID
  // ==========================================

  async getById(req: Request, res: Response) {

    try {

      const leave = await service.getById((req.params.id as string));

      return res.json({

        success: true,

        data: leave,

      });

    } catch (error: any) {

      return res.status(404).json({

        success: false,

        message: error.message,

      });

    }

  }

  // ==========================================
  // UPDATE
  // ==========================================

  async update(req: Request, res: Response) {

    try {

      const attachment = req.file?.filename;

      const validatedData = updateLeaveSchema.parse({

        ...req.body,

        attachment,

      });

      const leave = await service.update(

        (req.params.id as string),

        validatedData

      );

      return res.json({

        success: true,

        message: "Leave Updated Successfully",

        data: leave,

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.errors ?? error.message,

      });

    }

  }

  // ==========================================
  // DELETE
  // ==========================================

  async delete(req: Request, res: Response) {

    try {

      const result = await service.delete((req.params.id as string));

      return res.json(result);

    } catch (error: any) {

      return res.status(404).json({

        success: false,

        message: error.message,

      });

    }

  }

  // ==========================================
  // APPROVE
  // ==========================================

  async approve(req: Request, res: Response) {

    try {

      const leave = await service.approve(

        (req.params.id as string),

        (req as any).user.id

      );

      return res.json({

        success: true,

        message: "Leave Approved Successfully",

        data: leave,

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message,

      });

    }

  }

  // ==========================================
  // REJECT
  // ==========================================

  async reject(req: Request, res: Response) {

    try {

      const leave = await service.reject(

        (req.params.id as string),

        (req as any).user.id

      );

      return res.json({

        success: true,

        message: "Leave Rejected Successfully",

        data: leave,

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message,

      });

    }

  }

}