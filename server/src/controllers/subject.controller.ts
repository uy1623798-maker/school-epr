import { Request, Response } from "express";
import { SubjectService } from "../services/subject.service";

const service = new SubjectService();

export class SubjectController {

  async create(req: Request, res: Response) {
    try {
      const data = await service.createSubject(req.body);

      return res.status(201).json({
        success: true,
        data,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    const data = await service.getSubjects();

    return res.json({
      success: true,
      data,
    });
  }

}