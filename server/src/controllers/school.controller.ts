import { Request, Response } from "express";
import { SchoolService } from "../services/school.service";

const service = new SchoolService();

export class SchoolController {

  async create(req: Request, res: Response) {
    try {

      const school = await service.createSchool(req.body);

      return res.status(201).json({
        success: true,
        data: school
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.message
      });

    }
  }

  async getAll(req: Request, res: Response) {

    const schools = await service.getSchools();

    return res.json({
      success: true,
      data: schools
    });

  }

}