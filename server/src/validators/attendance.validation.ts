import { z } from "zod";

export const attendanceStatusEnum = z.enum([
  "PRESENT",
  "ABSENT",
  "LATE",
  "HALF_DAY",
  "LEAVE"
]);

export const attendanceItemSchema = z.object({
  studentId: z
    .string()
    .min(1, "Student ID is required"),

  status: attendanceStatusEnum,

  remarks: z
    .string()
    .max(255, "Remarks cannot exceed 255 characters")
    .optional()
});

export const bulkAttendanceSchema = z.object({

  date: z
    .string()
    .datetime({ offset: true })
    .or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")),

  teacherId: z
    .string()
    .min(1, "Teacher ID is required"),

  schoolId: z
    .string()
    .min(1, "School ID is required"),

  classId: z
    .string()
    .min(1, "Class ID is required"),

  sectionId: z
    .string()
    .min(1, "Section ID is required"),

  attendance: z
    .array(attendanceItemSchema)
    .min(1, "Attendance list cannot be empty")
});