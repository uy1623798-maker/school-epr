import prisma from "../config/prisma";

export class ClassRepository {

  // Create Class
  async create(data: any) {
    return prisma.academicClass.create({
      data,
      include: {
        school: true,
        academicSession: true,
      },
    });
  }

  // Get All Classes
  async findAll() {
    return prisma.academicClass.findMany({
      include: {
        school: true,
        academicSession: true,
        students: true,
        sections: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Get Class By ID
  async findById(id: string) {
    return prisma.academicClass.findUnique({
      where: {
        id,
      },
      include: {
        school: true,
        academicSession: true,
        students: true,
        sections: true,
      },
    });
  }

  // Update Class
  async update(id: string, data: any) {
    return prisma.academicClass.update({
      where: {
        id,
      },
      data,
      include: {
        school: true,
        academicSession: true,
      },
    });
  }

  // Delete Class
  async delete(id: string) {
    return prisma.academicClass.delete({
      where: {
        id,
      },
    });
  }

}