import { Request, Response } from "express";
import { TeacherService } from "../services/teacher.service";

const service = new TeacherService();

export class TeacherController {

  // Create Teacher
  async create(req: Request, res: Response) {
    try {

      // Uploaded image filename
      const profileImage = req.file?.filename;

      // Create Teacher
      const teacher = await service.createTeacher({
        ...req.body,
        profileImage,
      });

      return res.status(201).json({
        success: true,
        message: "Teacher Created Successfully",
        data: teacher,
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }

  // Get All Teachers
  async getAll(req: Request, res: Response) {
    try {

      const teachers = await service.getTeachers();

      return res.status(200).json({
        success: true,
        data: teachers,
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }

  // Get Teacher By ID
  async getById(req: Request, res: Response) {
    try {

      const teacher = await service.getTeacher((req.params.id as string));

      return res.status(200).json({
        success: true,
        data: teacher,
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }

  // Update Teacher
  async update(req: Request, res: Response) {
    try {

      const profileImage = req.file?.filename;

      const teacher = await service.updateTeacher((req.params.id as string), {
        ...req.body,
        profileImage,
      });

      return res.status(200).json({
        success: true,
        message: "Teacher Updated Successfully",
        data: teacher,
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }

  // Delete Teacher
  async delete(req: Request, res: Response) {
    try {

      await service.deleteTeacher((req.params.id as string));

      return res.status(200).json({
        success: true,
        message: "Teacher Deleted Successfully",
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message,
      });

    }
  }

}