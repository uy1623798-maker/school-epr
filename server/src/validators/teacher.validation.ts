import { z } from "zod";

export const createTeacherSchema = z.object({

  employeeId: z.string(),

  firstName: z.string(),

  lastName: z.string(),

  email: z.string().email(),

  phone: z.string().optional(),

  gender: z.enum(["MALE", "FEMALE", "OTHER"]),

  qualification: z.string().optional(),

  experience: z.number().optional(),

  joiningDate: z.string(),

  salary: z.number().optional(),

  schoolId: z.string()

});