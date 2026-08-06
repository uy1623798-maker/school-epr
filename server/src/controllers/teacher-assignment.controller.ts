import { Request, Response } from "express";
import { TeacherAssignmentService } from "../services/teacher-assignment.service";
import {
  createTeacherAssignmentSchema,
  updateTeacherAssignmentSchema
} from "../validators/teacher-assignment.validation";

const service = new TeacherAssignmentService();

export class TeacherAssignmentController {

  // ===========================
  // CREATE
  // ===========================

  async create(req: Request, res: Response) {

    try {

      const validatedData =
        createTeacherAssignmentSchema.parse(req.body);

      const result =
        await service.createAssignments(validatedData);

      return res.status(201).json({
        success: true,
        message: "Teacher Assignment Created Successfully",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.errors ?? error.message
      });

    }

  }

  // ===========================
  // GET ALL
  // ===========================

  async getAll(req: Request, res: Response) {

    try {

      const result =
        await service.getAllAssignments();

      return res.status(200).json({
        success: true,
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.message
      });

    }

  }

  // ===========================
  // GET ONE
  // ===========================

  async getByTeacher(req: Request, res: Response) {

    try {

      const result =
        await service.getTeacherAssignments(
          req.params.teacherId
        );

      return res.status(200).json({
        success: true,
        data: result
      });

    } catch (error: any) {

      return res.status(404).json({
        success: false,
        message: error.message
      });

    }

  }

  // ===========================
  // UPDATE
  // ===========================

  async update(req: Request, res: Response) {

    try {

      const validatedData =
        updateTeacherAssignmentSchema.parse(req.body);

      const result =
        await service.updateAssignments(
          req.params.teacherId,
          validatedData
        );

      return res.status(200).json({
        success: true,
        message: "Teacher Assignment Updated Successfully",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.errors ?? error.message
      });

    }

  }

  // ===========================
  // DELETE
  // ===========================

  async delete(req: Request, res: Response) {

    try {

      await service.deleteAssignments(
        req.params.teacherId
      );

      return res.status(200).json({
        success: true,
        message: "Teacher Assignment Deleted Successfully"
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.message
      });

    }

  }

}