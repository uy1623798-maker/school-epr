import prisma from "../config/prisma";
import { AttendanceRepository } from "../repositories/attendance.repository";
import type {
  AttendanceItemDTO,
  BulkAttendanceDTO,
} from "../interfaces/attendance.interface";

const attendanceRepository = new AttendanceRepository();

export class AttendanceService {
  async markBulkAttendance(data: BulkAttendanceDTO) {
    return prisma.$transaction(async (tx) => {
      const attendanceDate = new Date(data.date);

      const existingAttendance = await tx.attendance.findFirst({
        where: {
          classId: data.classId,
          sectionId: data.sectionId,
          date: attendanceDate,
        },
      });

      if (existingAttendance) {
        throw new Error(
          "Attendance is already marked for this class and date.",
        );
      }

      const attendanceData = data.attendance.map(
        (student: AttendanceItemDTO) => ({
          date: attendanceDate,
          status: student.status,
          remarks: student.remarks,
          studentId: student.studentId,
          teacherId: data.teacherId,
          schoolId: data.schoolId,
          classId: data.classId,
          sectionId: data.sectionId,
        }),
      );

      await tx.attendance.createMany({
        data: attendanceData,
      });

      return {
        success: true,
        totalStudents: attendanceData.length,
      };
    });
  }

  async getStudentAttendance(studentId: string) {
    const records =
      await attendanceRepository.findByStudent(studentId);

    const totalDays = records.length;

    const presentDays = records.filter(
      (record) => record.status === "PRESENT",
    ).length;

    const absentDays = records.filter(
      (record) => record.status === "ABSENT",
    ).length;

    const leaveDays = records.filter(
      (record) => record.status === "LEAVE",
    ).length;

    const lateDays = records.filter(
      (record) => record.status === "LATE",
    ).length;

    const halfDays = records.filter(
      (record) => record.status === "HALF_DAY",
    ).length;

    const attendancePercentage =
      totalDays === 0
        ? 0
        : Number(
            (
              ((presentDays + halfDays * 0.5) / totalDays) *
              100
            ).toFixed(2),
          );

    return {
      summary: {
        totalDays,
        presentDays,
        absentDays,
        leaveDays,
        lateDays,
        halfDays,
        attendancePercentage,
      },
      records,
    };
  }
}