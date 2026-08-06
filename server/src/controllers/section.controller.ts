import { Request, Response } from "express";
import { SectionService } from "../services/section.service";

const service = new SectionService();

export class SectionController {

  async create(req: Request, res: Response) {
    try {
      const data = await service.createSection(req.body);

      return res.status(201).json({
        success: true,
        data
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async getAll(req: Request, res: Response) {
    const data = await service.getSections();

    return res.json({
      success: true,
      data
    });
  }

}