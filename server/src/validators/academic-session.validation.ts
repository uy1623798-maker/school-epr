import { z } from "zod";

export const createAcademicSessionSchema = z.object({

  name: z.string().min(3),

  startDate: z.string(),

  endDate: z.string(),

  schoolId: z.string(),

  isActive: z.boolean().optional(),

  description: z.string().optional()

});