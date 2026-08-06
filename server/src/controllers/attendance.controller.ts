import { Request, Response } from "express";
import { AttendanceService } from "../services/attendance.service";
import { bulkAttendanceSchema } from "../validators/attendance.validation";

const service = new AttendanceService();

export class AttendanceController {

  async bulkAttendance(req: Request, res: Response) {

    try {

      // Validate Request
      const validatedData = bulkAttendanceSchema.parse(req.body);

      // Service Call
      const result = await service.markBulkAttendance(validatedData);

      return res.status(201).json({
        success: true,
        message: "Attendance Marked Successfully",
        data: result
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.errors ?? error.message
      });

    }

  }

}