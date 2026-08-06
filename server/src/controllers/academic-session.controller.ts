import { Request, Response } from "express";
import { AcademicSessionService } from "../services/academic-session.service";

const service = new AcademicSessionService();

export class AcademicSessionController {

  async create(req: Request, res: Response) {
    try {

      const session = await service.createSession(req.body);

      return res.status(201).json({
        success: true,
        message: "Academic Session Created Successfully",
        data: session
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.message
      });

    }
  }

  async getAll(req: Request, res: Response) {

    const sessions = await service.getSessions();

    return res.json({
      success: true,
      data: sessions
    });

  }

  async getById(req: Request, res: Response) {

    const session = await service.getSession(req.params.id);

    return res.json({
      success: true,
      data: session
    });

  }

  async update(req: Request, res: Response) {

    const session = await service.updateSession(
      req.params.id,
      req.body
    );

    return res.json({
      success: true,
      message: "Session Updated Successfully",
      data: session
    });

  }

  async delete(req: Request, res: Response) {

    await service.deleteSession(req.params.id);

    return res.json({
      success: true,
      message: "Session Deleted Successfully"
    });

  }

}