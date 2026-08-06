import prisma from "../config/prisma";
import { Prisma, DayOfWeek } from "@prisma/client";
import { CreateTimetableDTO } from "../interfaces/timetable.interface";

export class TimetableRepository {

  // ======================================================
  // CREATE
  // ======================================================

  async create(data: CreateTimetableDTO) {
    return prisma.timetable.create({
      data,
      include: {
        teacher: true,
        academicClass: true,
        section: true,
        subject: true,
        school: true,
      },
    });
  }

  // ======================================================
  // GET ALL
  // ======================================================

  async findAll(
    page = 1,
    limit = 10,
    search?: string
  ) {

    const skip = (page - 1) * limit;

    const where: Prisma.TimetableWhereInput = {};

    if (search) {
      where.OR = [
        {
          teacher: {
            firstName: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          teacher: {
            lastName: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          subject: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          academicClass: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
      ];
    }

    const [data, total] = await Promise.all([

      prisma.timetable.findMany({

        where,

        skip,

        take: limit,

        include: {

          teacher: true,

          academicClass: true,

          section: true,

          subject: true,

          school: true

        },

        orderBy: [

          {
            day: "asc",
          },

          {
            startTime: "asc",
          },

        ],

      }),

      prisma.timetable.count({
        where,
      }),

    ]);

    return {

      total,

      page,

      limit,

      totalPages: Math.ceil(total / limit),

      data,

    };

  }

  // ======================================================
  // GET BY ID
  // ======================================================

  async findById(id: string) {

    return prisma.timetable.findUnique({

      where: {
        id,
      },

      include: {

        teacher: true,

        academicClass: true,

        section: true,

        subject: true,

        school: true,

      },

    });

  };
    // ======================================================
  // UPDATE
  // ======================================================

  async update(id: string, data: Partial<CreateTimetableDTO>) {
    return prisma.timetable.update({
      where: { id },
      data,
      include: {
        teacher: true,
        academicClass: true,
        section: true,
        subject: true,
        school: true,
      },
    });
  }

  // ======================================================
  // DELETE
  // ======================================================

  async delete(id: string) {
    return prisma.timetable.delete({
      where: { id },
    });
  }

  // ======================================================
  // TEACHER TIMETABLE
  // ======================================================

  async findTeacherTimetable(teacherId: string) {
    return prisma.timetable.findMany({
      where: { teacherId },
      include: {
        subject: true,
        academicClass: true,
        section: true,
      },
      orderBy: [
        { day: "asc" },
        { startTime: "asc" },
      ],
    });
  }

  // ======================================================
  // CLASS TIMETABLE
  // ======================================================

  async findClassTimetable(classId: string) {
    return prisma.timetable.findMany({
      where: { classId },
      include: {
        teacher: true,
        subject: true,
        section: true,
      },
      orderBy: [
        { day: "asc" },
        { startTime: "asc" },
      ],
    });
  }

  // ======================================================
  // SECTION TIMETABLE
  // ======================================================

  async findSectionTimetable(sectionId: string) {
    return prisma.timetable.findMany({
      where: { sectionId },
      include: {
        teacher: true,
        subject: true,
        academicClass: true,
      },
      orderBy: [
        { day: "asc" },
        { startTime: "asc" },
      ],
    });
  }

  // ======================================================
  // TEACHER CONFLICT
  // ======================================================

  async teacherConflict(
    teacherId: string,
    day: DayOfWeek,
    startTime: string,
    endTime: string
  ) {
    return prisma.timetable.findFirst({
      where: {
        teacherId,
        day,
        startTime,
        endTime,
      },
    });
  }

  // ======================================================
  // CLASS CONFLICT
  // ======================================================

  async classConflict(
    classId: string,
    sectionId: string,
    day: DayOfWeek,
    startTime: string,
    endTime: string
  ) {
    return prisma.timetable.findFirst({
      where: {
        classId,
        sectionId,
        day,
        startTime,
        endTime,
      },
    });
  }

  // ======================================================
  // ROOM CONFLICT
  // ======================================================

  async roomConflict(
    roomNo: string,
    day: DayOfWeek,
    startTime: string,
    endTime: string
  ) {
    return prisma.timetable.findFirst({
      where: {
        roomNo,
        day,
        startTime,
        endTime,
      },
    });
  }

  // ======================================================
  // TODAY TIMETABLE
  // ======================================================

  async today(day: DayOfWeek) {
    return prisma.timetable.findMany({
      where: { day },
      include: {
        teacher: true,
        subject: true,
        academicClass: true,
        section: true,
      },
      orderBy: {
        startTime: "asc",
      },
    });
  }

  // ======================================================
  // WEEKLY TIMETABLE
  // ======================================================

  async weekly() {
    return prisma.timetable.findMany({
      include: {
        teacher: true,
        subject: true,
        academicClass: true,
        section: true,
      },
      orderBy: [
        { day: "asc" },
        { startTime: "asc" },
      ],
    });
  }
}