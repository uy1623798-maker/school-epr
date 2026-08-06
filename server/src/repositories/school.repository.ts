import prisma from "../config/prisma";

export class SchoolRepository {

  async create(data: any) {
    return prisma.school.create({
      data
    });
  }

  async findAll() {
    return prisma.school.findMany();
  }

  async findById(id: string) {
    return prisma.school.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: string, data: any) {
    return prisma.school.update({
      where: {
        id
      },
      data
    });
  }

  async delete(id: string) {
    return prisma.school.delete({
      where: {
        id
      }
    });
  }

}