import prisma from "../config/prisma";
import { Prisma } from "@prisma/client";

export class StudentRepository {

  async create(data: Prisma.StudentCreateInput) {
    return prisma.student.create({
      data,
      include: {
        school: true,
        academicClass: true,
        section: true
      }
    });
  }

  async findAll() {
    return prisma.student.findMany({
      include: {
        school: true,
        academicClass: true,
        section: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
async findByClassAndSection(
  classId: string,
  sectionId: string,
) {
  return prisma.student.findMany({
    where: {
      classId,
      sectionId,
      isActive: true,
    },
    select: {
      id: true,
      admissionNo: true,
      rollNumber: true,
      firstName: true,
      lastName: true,
      profileImage: true,
      classId: true,
      sectionId: true,
    },
    orderBy: {
      rollNumber: "asc",
    },
  });
}
  async findById(id: string) {
    return prisma.student.findUnique({
      where: { id },
      include: {
        school: true,
        academicClass: true,
        section: true
      }
    });
  }

  async findByAdmissionNo(admissionNo: string) {
    return prisma.student.findUnique({
      where: {
        admissionNo
      }
    });
  }

  async update(id: string, data: Prisma.StudentUpdateInput) {
    return prisma.student.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return prisma.student.delete({
      where: { id }
    });
  }

}