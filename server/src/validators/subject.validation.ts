import { z } from "zod";

export const createSubjectSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  description: z.string().optional(),
  schoolId: z.string(),
  classId: z.string(),
});