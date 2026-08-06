import prisma from "../config/prisma";

export class TeacherAssignmentRepository {

  // ==============================
  // Teacher Exists
  // ==============================

  async teacherExists(teacherId: string) {
    return prisma.teacher.findUnique({
      where: {
        id: teacherId
      }
    });
  }

  // ==============================
  // Class Exists
  // ==============================

  async classExists(classId: string) {
    return prisma.academicClass.findUnique({
      where: {
        id: classId
      }
    });
  }

  // ==============================
  // Section Exists
  // ==============================

  async sectionExists(sectionId: string) {
    return prisma.section.findUnique({
      where: {
        id: sectionId
      }
    });
  }

  // ==============================
  // Subject Exists
  // ==============================

  async subjectExists(subjectId: string) {
    return prisma.subject.findUnique({
      where: {
        id: subjectId
      }
    });
  }

  // ==============================
  // Duplicate Assignment Check
  // ==============================

  async assignmentExists(
    teacherId: string,
    classId: string,
    sectionId: string,
    subjectId: string
  ) {

    const teacherClass = await prisma.teacherClass.findFirst({
      where: {
        teacherId,
        classId
      }
    });

    const teacherSection = await prisma.teacherSection.findFirst({
      where: {
        teacherId,
        sectionId
      }
    });

    const teacherSubject = await prisma.teacherSubject.findFirst({
      where: {
        teacherId,
        subjectId
      }
    });

    return !!(teacherClass && teacherSection && teacherSubject);
  }

  // ==============================
  // Create Assignment
  // ==============================

  async createAssignment(
    teacherId: string,
    classId: string,
    sectionId: string,
    subjectId: string
  ) {

    return prisma.$transaction(async (tx) => {

      await tx.teacherClass.create({
        data: {
          teacherId,
          classId
        }
      });

      await tx.teacherSection.create({
        data: {
          teacherId,
          sectionId
        }
      });

      await tx.teacherSubject.create({
        data: {
          teacherId,
          subjectId
        }
      });

    });

  }

  // ==============================
  // Get All Assignments
  // ==============================

  async getAllAssignments() {

    return prisma.teacher.findMany({

      include: {

        assignedClasses: {
          include: {
            academicClass: true
          }
        },

        assignedSections: {
          include: {
            section: true
          }
        },

        assignedSubjects: {
          include: {
            subject: true
          }
        }

      }

    });

  }

  // ==============================
  // Get Teacher Assignment
  // ==============================

  async getTeacherAssignments(
    teacherId: string
  ) {

    return prisma.teacher.findUnique({

      where: {
        id: teacherId
      },

      include: {

        assignedClasses: {
          include: {
            academicClass: true
          }
        },

        assignedSections: {
          include: {
            section: true
          }
        },

        assignedSubjects: {
          include: {
            subject: true
          }
        }

      }

    });

  }

  // ==============================
  // Delete Assignment
  // ==============================

  async deleteAssignments(
    teacherId: string
  ) {

    return prisma.$transaction(async (tx) => {

      await tx.teacherClass.deleteMany({
        where: {
          teacherId
        }
      });

      await tx.teacherSection.deleteMany({
        where: {
          teacherId
        }
      });

      await tx.teacherSubject.deleteMany({
        where: {
          teacherId
        }
      });

    });

  }

}