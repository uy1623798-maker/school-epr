import { Request, Response } from "express";
import { ClassService } from "../services/class.service";

const service = new ClassService();

export class ClassController {

  async create(req: Request, res: Response) {
    try {

      const data = await service.createClass(req.body);

      return res.status(201).json({
        success: true,
        message: "Class Created Successfully",
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

    const data = await service.getClasses();

    return res.json({
      success: true,
      data
    });

  }

  async getById(req: Request, res: Response) {

    const data = await service.getClass(req.params.id);

    return res.json({
      success: true,
      data
    });

  }

  async update(req: Request, res: Response) {

    const data = await service.updateClass(
      req.params.id,
      req.body
    );

    return res.json({
      success: true,
      data
    });

  }

  async delete(req: Request, res: Response) {

    await service.deleteClass(req.params.id);

    return res.json({
      success: true,
      message: "Deleted Successfully"
    });

  }

}