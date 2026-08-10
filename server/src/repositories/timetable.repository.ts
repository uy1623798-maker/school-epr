import prisma from "../config/prisma";
import { Prisma, DayOfWeek } from "@prisma/client";
import {
  CreateTimetableDTO,
  UpdateTimetableDTO,
} from "../interfaces/timetable.interface";

export class TimetableRepository {
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

  async findAll(
    page = 1,
    limit = 10,
    search?: string,
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
          school: true,
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
  }

  async update(
    id: string,
    data: UpdateTimetableDTO,
  ) {
    return prisma.timetable.update({
      where: {
        id,
      },

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

  async delete(id: string) {
    return prisma.timetable.delete({
      where: {
        id,
      },
    });
  }

  async findTeacherTimetable(
    teacherId: string,
  ) {
    return prisma.timetable.findMany({
      where: {
        teacherId,
      },

      include: {
        subject: true,
        academicClass: true,
        section: true,
      },

      orderBy: [
        {
          day: "asc",
        },
        {
          startTime: "asc",
        },
      ],
    });
  }

  async findClassTimetable(classId: string) {
    return prisma.timetable.findMany({
      where: {
        classId,
      },

      include: {
        teacher: true,
        subject: true,
        section: true,
      },

      orderBy: [
        {
          day: "asc",
        },
        {
          startTime: "asc",
        },
      ],
    });
  }

  async findSectionTimetable(
    sectionId: string,
  ) {
    return prisma.timetable.findMany({
      where: {
        sectionId,
      },

      include: {
        teacher: true,
        subject: true,
        academicClass: true,
      },

      orderBy: [
        {
          day: "asc",
        },
        {
          startTime: "asc",
        },
      ],
    });
  }

  async teacherConflict(
    teacherId: string,
    day: DayOfWeek,
    startTime: string,
    endTime: string,
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

  async classConflict(
    classId: string,
    sectionId: string,
    day: DayOfWeek,
    startTime: string,
    endTime: string,
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

  async roomConflict(
    roomNo: string,
    day: DayOfWeek,
    startTime: string,
    endTime: string,
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

  async today(day: DayOfWeek) {
    return prisma.timetable.findMany({
      where: {
        day,
      },

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

  async weekly() {
    return prisma.timetable.findMany({
      include: {
        teacher: true,
        subject: true,
        academicClass: true,
        section: true,
      },

      orderBy: [
        {
          day: "asc",
        },
        {
          startTime: "asc",
        },
      ],
    });
  }
}