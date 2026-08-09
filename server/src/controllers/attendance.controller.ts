import type { Request, Response } from "express";

import { AttendanceService } from "../services/attendance.service";
import { bulkAttendanceSchema } from "../validators/attendance.validation";

const service = new AttendanceService();

export class AttendanceController {
  async bulkAttendance(req: Request, res: Response) {
    try {
      const validatedData = bulkAttendanceSchema.parse(req.body);

      const result =
        await service.markBulkAttendance(validatedData);

      return res.status(201).json({
        success: true,
        message: "Attendance marked successfully.",
        data: result,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to mark attendance.";

      return res.status(400).json({
        success: false,
        message,
      });
    }
  }

  async getStudentAttendance(req: Request, res: Response) {
    try {
      const studentIdParam = (req.params.studentId as string);

      const studentId = Array.isArray(studentIdParam)
        ? studentIdParam[0]
        : studentIdParam;

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message: "Student ID is required.",
        });
      }

      const result =
        await service.getStudentAttendance(studentId);

      return res.status(200).json({
        success: true,
        message: "Student attendance fetched successfully.",
        data: result,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to fetch student attendance.";

      return res.status(400).json({
        success: false,
        message,
      });
    }
  }
}