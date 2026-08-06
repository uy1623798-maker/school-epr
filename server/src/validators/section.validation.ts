import { z } from "zod";

export const createSectionSchema = z.object({
  name: z.string().min(1),
  code: z.string().min(1),
  capacity: z.number().optional(),
  classId: z.string()
});