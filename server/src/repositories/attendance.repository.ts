import prisma from "../config/prisma";
import { Prisma } from "@prisma/client";

export class AttendanceRepository {

  async create(data: Prisma.AttendanceCreateInput) {
    return prisma.attendance.create({
      data,
      include: {
        student: true,
        teacher: true,
        academicClass: true,
        section: true
      }
    });
  }

  async findAll() {
    return prisma.attendance.findMany({
      include: {
        student: true,
        teacher: true,
        academicClass: true,
        section: true
      },
      orderBy: {
        date: "desc"
      }
    });
  }

  async findByStudent(studentId: string) {
    return prisma.attendance.findMany({
      where: { studentId },
      orderBy: { date: "desc" }
    });
  }

  async update(id: string, data: Prisma.AttendanceUpdateInput) {
    return prisma.attendance.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return prisma.attendance.delete({
      where: { id }
    });
  }
}