import { Request, Response } from "express";

import { TCService } from "../services/tc.service";

import {
  createTCSchema,
  updateTCSchema,
} from "../validators/tc.validator";

const service = new TCService();

export class TCController {

  // ==========================================
  // CREATE TC
  // ==========================================

  async create(req: Request, res: Response) {

    try {

      const documentUrl = req.file?.filename;

      const validated =
        createTCSchema.parse({

          ...req.body,

          documentUrl,

        });

      const tc =
        await service.create(validated);

      return res.status(201).json({

        success: true,

        message: "TC Request Created Successfully",

        data: tc,

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

      const data =
        await service.getAll({

          page: Number(req.query.page) || 1,

          limit: Number(req.query.limit) || 10,

          search: req.query.search as string,

          status: req.query.status as any,

          schoolId: req.query.schoolId as string,

          teacherId: req.query.teacherId as string,

          studentId: req.query.studentId as string,

        });

      return res.json({

        success: true,

        ...data,

      });

    } catch (error: any) {

      return res.status(500).json({

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

      const tc =
        await service.getById((req.params.id as string));

      return res.json({

        success: true,

        data: tc,

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

      const validated =
        updateTCSchema.parse(req.body);

      const tc =
        await service.update(

          (req.params.id as string),

          validated

        );

      return res.json({

        success: true,

        message: "TC Updated Successfully",

        data: tc,

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

      const result =
        await service.delete((req.params.id as string));

      return res.json(result);

    } catch (error: any) {

      return res.status(400).json({

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

      const tc =
        await service.approve(

          (req.params.id as string),

          (req as any).user.id

        );

      return res.json({

        success: true,

        message: "TC Approved",

        data: tc,

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

      const tc =
        await service.reject(

          (req.params.id as string),

          (req as any).user.id,

          req.body.remarks

        );

      return res.json({

        success: true,

        message: "TC Rejected",

        data: tc,

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message,

      });

    }

  }

  // ==========================================
  // DASHBOARD STATS
  // ==========================================

  async dashboard(req: Request, res: Response) {

    try {

      const stats =
        await service.dashboard(

          req.query.schoolId as string

        );

      return res.json({

        success: true,

        data: stats,

      });

    } catch (error: any) {

      return res.status(500).json({

        success: false,

        message: error.message,

      });

    }

  }
// ==========================================
// VERIFY
// ==========================================

async verify(req: Request, res: Response) {

  try {

    const tc = await service.verify((req.params.id as string));

    return res.json({

      success: true,

      verified: true,

      data: tc,

    });

  } catch (error: any) {

    return res.status(404).json({

      success: false,

      verified: false,

      message: error.message,

    });

  }

}

// ==========================================
// DOWNLOAD PDF
// ==========================================

async download(req: Request, res: Response) {

  try {

    const pdf = await service.download((req.params.id as string));

    return res.download(pdf);

  } catch (error: any) {

    return res.status(404).json({

      success: false,

      message: error.message,

    });

  }

}
}