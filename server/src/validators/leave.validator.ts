import { z } from "zod";
import { LeaveStatus, LeaveType } from "@prisma/client";

export const createLeaveSchema = z.object({

  title: z
    .string()
    .min(3)
    .max(100),

  reason: z
    .string()
    .min(5)
    .max(1000),

  leaveType: z.nativeEnum(LeaveType),

  fromDate: z.coerce.date(),

  toDate: z.coerce.date(),

  attachment: z
    .string()
    .optional(),

  userId: z.string().cuid(),

  schoolId: z.string().cuid()

}).refine(

  (data) => data.toDate >= data.fromDate,

  {

    message: "To Date must be after From Date",

    path: ["toDate"]

  }

);

export const updateLeaveSchema = z.object({

  title: z
    .string()
    .min(3)
    .max(100)
    .optional(),

  reason: z
    .string()
    .min(5)
    .max(1000)
    .optional(),

  leaveType: z
    .nativeEnum(LeaveType)
    .optional(),

  fromDate: z
    .coerce
    .date()
    .optional(),

  toDate: z
    .coerce
    .date()
    .optional(),

  attachment: z
    .string()
    .optional(),

  status: z
    .nativeEnum(LeaveStatus)
    .optional()

});