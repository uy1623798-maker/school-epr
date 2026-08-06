import { z } from "zod";
import { TCReason, TCStatus } from "@prisma/client";

export const createTCSchema = z.object({

  studentId: z.string().cuid(),

  teacherId: z.string().cuid(),

  schoolId: z.string().cuid(),

  reason: z.nativeEnum(TCReason),

  description: z.string().optional(),

  documentUrl: z.string().optional()

});

export const updateTCSchema = z.object({

  reason: z.nativeEnum(TCReason).optional(),

  description: z.string().optional(),

  documentUrl: z.string().optional(),

  remarks: z.string().optional(),

  status: z.nativeEnum(TCStatus).optional()

});