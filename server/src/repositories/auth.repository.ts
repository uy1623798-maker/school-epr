import prisma from "../config/prisma";

export class AuthRepository {
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        teacherProfile: true,
      },
    });
  }

  async createUser(data: any) {
    return prisma.user.create({
      data,
      include: {
        teacherProfile: true,
      },
    });
  }

  async findUserById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async getFirstSchool() {
    return prisma.school.findFirst();
  }
}
