import { z } from "zod";

export const createStudentSchema = z.object({

  firstName:z.string(),

  lastName:z.string(),

  email:z.string().email().optional(),

  phone:z.string().optional(),

  gender:z.enum(["MALE","FEMALE","OTHER"]),

  dob:z.string(),

  admissionDate:z.string(),

  schoolId:z.string(),

  classId:z.string(),

  sectionId:z.string()

});