import { TeacherAssignmentRepository } from "../repositories/teacher-assignment.repository";
import { CreateTeacherAssignmentDTO } from "../interfaces/teacher-assignment.interface";

const repository = new TeacherAssignmentRepository();

export class TeacherAssignmentService {

  // ======================================
  // CREATE ASSIGNMENTS
  // ======================================

  async createAssignments(data: CreateTeacherAssignmentDTO) {

    const teacher = await repository.teacherExists(data.teacherId);

    if (!teacher) {
      throw new Error("Teacher not found.");
    }

    for (const assignment of data.assignments) {

      const academicClass = await repository.classExists(
        assignment.classId
      );

      if (!academicClass) {
        throw new Error("Class not found.");
      }

      const section = await repository.sectionExists(
        assignment.sectionId
      );

      if (!section) {
        throw new Error("Section not found.");
      }

      const subject = await repository.subjectExists(
        assignment.subjectId
      );

      if (!subject) {
        throw new Error("Subject not found.");
      }

      // Same School Validation

      if (
        teacher.schoolId !== academicClass.schoolId ||
        teacher.schoolId !== section.schoolId ||
        teacher.schoolId !== subject.schoolId
      ) {
        throw new Error(
          "Teacher, Class, Section and Subject must belong to the same school."
        );
      }

      const alreadyAssigned =
        await repository.assignmentExists(
          data.teacherId,
          assignment.classId,
          assignment.sectionId,
          assignment.subjectId
        );

      if (alreadyAssigned) {
        continue;
      }

      await repository.createAssignment(
        data.teacherId,
        assignment.classId,
        assignment.sectionId,
        assignment.subjectId
      );

    }

    return {
      success: true,
      message: "Teacher Assignments Created Successfully"
    };

  }

  // ======================================
  // GET ALL
  // ======================================

  async getAllAssignments() {

    return repository.getAllAssignments();

  }

  // ======================================
  // GET ONE
  // ======================================

  async getTeacherAssignments(
    teacherId: string
  ) {

    const teacher =
      await repository.getTeacherAssignments(
        teacherId
      );

    if (!teacher) {
      throw new Error("Teacher not found.");
    }

    return teacher;

  }

  // ======================================
  // UPDATE
  // ======================================

  async updateAssignments(
    teacherId: string,
    data: CreateTeacherAssignmentDTO
  ) {

    await repository.deleteAssignments(
      teacherId
    );

    return this.createAssignments({
      teacherId,
      assignments: data.assignments
    });

  }

  // ======================================
  // DELETE
  // ======================================

  async deleteAssignments(
    teacherId: string
  ) {

    const teacher =
      await repository.teacherExists(
        teacherId
      );

    if (!teacher) {
      throw new Error("Teacher not found.");
    }

    await repository.deleteAssignments(
      teacherId
    );

    return {
      success: true,
      message: "Assignments Deleted Successfully"
    };

  }

}