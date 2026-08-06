import prisma from "../config/prisma";

export class SectionRepository {

  async create(data: any) {
    return prisma.section.create({
      data,
      include: {
        academicClass: true
      }
    });
  }

  async findAll() {
    return prisma.section.findMany({
      include: {
        academicClass: true,
        students: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  async findById(id: string) {
    return prisma.section.findUnique({
      where: { id },
      include: {
        academicClass: true,
        students: true
      }
    });
  }

  async update(id: string, data: any) {
    return prisma.section.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return prisma.section.delete({
      where: { id }
    });
  }
}