import { z } from "zod";

export const createHomeworkSchema = z.object({

  title: z.string().min(3),

  description: z.string().optional(),

  attachment: z.string().optional(),

  videoUrl: z.string().optional(),

  dueDate: z.coerce.date(),

  schoolId: z.string(),

  classId: z.string(),

  sectionId: z.string(),

  subjectId: z.string(),

  teacherId: z.string()

});

export const updateHomeworkSchema = z.object({

  title: z.string().optional(),

  description: z.string().optional(),

  attachment: z.string().optional(),

  videoUrl: z.string().optional(),

  dueDate: z.coerce.date().optional(),

  status: z.enum(["ACTIVE","CLOSED"]).optional()

});