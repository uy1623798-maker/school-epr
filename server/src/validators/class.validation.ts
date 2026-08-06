import { z } from "zod";

export const createClassSchema = z.object({

  name: z.string().min(1),

  code: z.string().min(1),

  description: z.string().optional(),

  maximumStudents: z.number().optional(),

  schoolId: z.string(),

  academicSessionId: z.string()

});