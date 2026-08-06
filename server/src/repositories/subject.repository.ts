import prisma from "../config/prisma";

export class SubjectRepository {

  async create(data: any) {
    return prisma.subject.create({
      data,
      include: {
        school: true,
        academicClass: true,
      },
    });
  }

  async findAll() {
    return prisma.subject.findMany({
      include: {
        school: true,
        academicClass: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return prisma.subject.findUnique({
      where: { id },
      include: {
        school: true,
        academicClass: true,
      },
    });
  }

  async update(id: string, data: any) {
    return prisma.subject.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.subject.delete({
      where: { id },
    });
  }

}