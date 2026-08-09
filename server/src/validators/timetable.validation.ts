import { DayOfWeek } from "@prisma/client";
import { z } from "zod";

const timeSchema = z.string().regex(
  /^([01]\d|2[0-3]):[0-5]\d$/,
  "Time must use HH:mm format."
);

export const createTimetableSchema = z
  .object({
    day: z.nativeEnum(DayOfWeek),
    startTime: timeSchema,
    endTime: timeSchema,
    roomNo: z.string().trim().min(1).optional(),
    teacherId: z.string().min(1),
    classId: z.string().min(1),
    sectionId: z.string().min(1),
    subjectId: z.string().min(1),
    schoolId: z.string().min(1),
  })
  .refine((data) => data.startTime < data.endTime, {
    message: "End time must be after start time.",
    path: ["endTime"],
  });

export const updateTimetableSchema = z.object({
  day: z.nativeEnum(DayOfWeek).optional(),
  startTime: timeSchema.optional(),
  endTime: timeSchema.optional(),
  roomNo: z.string().trim().min(1).optional(),
  teacherId: z.string().min(1).optional(),
  classId: z.string().min(1).optional(),
  sectionId: z.string().min(1).optional(),
  subjectId: z.string().min(1).optional(),
});