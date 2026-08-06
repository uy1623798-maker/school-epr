import { z } from "zod";

const assignmentSchema = z.object({
  classId: z.string().cuid(),

  sectionId: z.string().cuid(),

  subjectId: z.string().cuid()
});

export const createTeacherAssignmentSchema = z.object({

  teacherId: z.string().cuid(),

  assignments: z
    .array(assignmentSchema)
    .min(1, "At least one assignment is required")
});

export const updateTeacherAssignmentSchema = z.object({

  assignments: z
    .array(assignmentSchema)
    .min(1, "Assignments cannot be empty")

});