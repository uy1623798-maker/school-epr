import prisma from "../config/prisma";

export class AcademicSessionRepository {

  async create(data: any) {
    return prisma.academicSession.create({
      data
    });
  }

  async findAll() {
    return prisma.academicSession.findMany({
      include: {
        school: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  async findById(id: string) {
    return prisma.academicSession.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: string, data: any) {
    return prisma.academicSession.update({
      where: {
        id
      },
      data
    });
  }

  async delete(id: string) {
    return prisma.academicSession.delete({
      where: {
        id
      }
    });
  }

}