import prisma from "../config/prisma";
import { AttendanceRepository } from "../repositories/attendance.repository";
import { BulkAttendanceDTO } from "../interfaces/attendance.interface";

const attendanceRepository = new AttendanceRepository();

export class AttendanceService {

  async markBulkAttendance(data: BulkAttendanceDTO) {

    return await prisma.$transaction(async (tx) => {

      // Duplicate Attendance Check
      const existingAttendance = await tx.attendance.findFirst({
        where: {
          classId: data.classId,
          sectionId: data.sectionId,
          date: new Date(data.date)
        }
      });

      if (existingAttendance) {
        throw new Error("Attendance already marked for this class.");
      }

      // Prepare Data
      const attendanceData = data.attendance.map((student) => ({
        date: new Date(data.date),

        status: student.status,

        remarks: student.remarks,

        studentId: student.studentId,

        teacherId: data.teacherId,

        schoolId: data.schoolId,

        classId: data.classId,

        sectionId: data.sectionId
      }));
      console.log("Attendance",attendanceData);

      // Bulk Insert
      await tx.attendance.createMany({
        data: attendanceData
      });

      return {
        success: true,
        totalStudents: attendanceData.length
      };

    });

  }

}