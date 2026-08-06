import prisma from "../config/prisma";

export class TeacherRepository {

  // Create Teacher
  async create(data: any) {
    return prisma.teacher.create({
      data,
      include: {
        school: true,
      },
    });
  }

  // Get All Teachers
  async findAll() {
    return prisma.teacher.findMany({
      include: {
        school: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Get Teacher By ID
  async findById(id: string) {
    return prisma.teacher.findUnique({
      where: {
        id,
      },
      include: {
        school: true,
      },
    });
  }

  // Update Teacher
  async update(id: string, data: any) {
    return prisma.teacher.update({
      where: {
        id,
      },
      data,
      include: {
        school: true,
      },
    });
  }

  // Delete Teacher
  async delete(id: string) {
    return prisma.teacher.delete({
      where: {
        id,
      },
    });
  }

  // Find Teacher By Email
  async findByEmail(email: string) {
    return prisma.teacher.findUnique({
      where: {
        email,
      },
    });
  }

  // Find Teacher By Employee ID
  async findByEmployeeId(employeeId: string) {
    return prisma.teacher.findUnique({
      where: {
        employeeId,
      },
    });
  }
}