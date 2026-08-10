import type { Request, Response } from "express";

import { AttendanceService } from "../services/attendance.service";
import { bulkAttendanceSchema } from "../validators/attendance.validation";

const service = new AttendanceService();

export class AttendanceController {
  async bulkAttendance(req: Request, res: Response) {
    try {
      if (!req.user?.schoolId || !req.user.teacherId) {
        return res.status(403).json({
          success: false,
          message: "A linked teacher account is required to mark attendance.",
        });
      }

      const validatedData = bulkAttendanceSchema.parse(req.body);

      const result = await service.markBulkAttendance({
        ...validatedData,
        teacherId: req.user.teacherId,
        schoolId: req.user.schoolId,
      });

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
