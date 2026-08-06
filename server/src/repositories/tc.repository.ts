import prisma from "../config/prisma";

import {
  Prisma,
  TCStatus
} from "@prisma/client";

import {
  CreateTCDTO,
  UpdateTCDTO,
  TCFilterDTO,
} from "../interfaces/tc.interface";

export class TCRepository {

  // ==========================================
  // CREATE TC
  // ==========================================

  async create(
    data: CreateTCDTO & {
      tcNumber: string;
    }
  ) {

    return prisma.transferCertificate.create({

      data,

      include: {

        student: true,

        teacher: true,

        school: true,

      },

    });

  }

  // ==========================================
  // GET ALL TC
  // ==========================================

  async findAll(filters: TCFilterDTO) {

    const {

      page = 1,

      limit = 10,

      search,

      status,

      schoolId,

      teacherId,

      studentId,

    } = filters;

    const skip = (page - 1) * limit;

    const where: Prisma.TransferCertificateWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (schoolId) {
      where.schoolId = schoolId;
    }

    if (teacherId) {
      where.teacherId = teacherId;
    }

    if (studentId) {
      where.studentId = studentId;
    }

    if (search) {

      where.OR = [

        {
          tcNumber: {
            contains: search,
            mode: "insensitive",
          },
        },

        {
          student: {
            firstName: {
              contains: search,
              mode: "insensitive",
            },
          },
        },

        {
          student: {
            lastName: {
              contains: search,
              mode: "insensitive",
            },
          },
        },

      ];

    }

    const [data, total] = await Promise.all([

      prisma.transferCertificate.findMany({

        where,

        skip,

        take: limit,

        include: {

          student: true,

          teacher: true,

          school: true,

        },

        orderBy: {

          createdAt: "desc",

        },

      }),

      prisma.transferCertificate.count({

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

  // ==========================================
  // GET BY ID
  // ==========================================

  async findById(id: string) {

    return prisma.transferCertificate.findUnique({

      where: {

        id,

      },

      include: {

        student: true,

        teacher: true,

        school: true,

      },

    });

  }

  // ==========================================
  // UPDATE
  // ==========================================

  async update(
    id: string,
    data: UpdateTCDTO
  ) {

    return prisma.transferCertificate.update({

      where: {

        id,

      },

      data,

    });

  }

  // ==========================================
  // DELETE
  // ==========================================

  async delete(id: string) {

    return prisma.transferCertificate.delete({

      where: {

        id,

      },

    });

  }

  // ==========================================
  // APPROVE TC
  // ==========================================

  async approve(
    id: string,
    approvedBy: string
  ) {

    return prisma.transferCertificate.update({

      where: {

        id,

      },

      data: {

        status: TCStatus.APPROVED,

        approvedBy,

        approvedAt: new Date(),

      },

    });

  }

  // ==========================================
  // REJECT TC
  // ==========================================

  async reject(
    id: string,
    approvedBy: string,
    remarks: string
  ) {

    return prisma.transferCertificate.update({

      where: {

        id,

      },

      data: {

        status: TCStatus.REJECTED,

        approvedBy,

        approvedAt: new Date(),

        remarks,

      },

    });

  }

  // ==========================================
  // GENERATED
  // ==========================================

  async markGenerated(
    id: string,
    pdfUrl: string,
    qrCode: string
  ) {

    return prisma.transferCertificate.update({

      where: {

        id,

      },

      data: {

        status: TCStatus.GENERATED,

        pdfUrl,

        qrCode,

        generatedAt: new Date(),

      },

    });

  }
    // ==========================================
  // FIND STUDENT
  // ==========================================

  async findStudent(studentId: string) {

    return prisma.user.findUnique({

      where: {
        id: studentId,
      },

      include: {
        school: true,
      },

    });

  }

  // ==========================================
  // FIND TEACHER
  // ==========================================

  async findTeacher(teacherId: string) {

    return prisma.user.findUnique({

      where: {
        id: teacherId,
      },

      include: {
        school: true,
      },

    });

  }

  // ==========================================
  // FIND PENDING TC BY STUDENT
  // ==========================================

  async findPendingByStudent(studentId: string) {

    return prisma.transferCertificate.findFirst({

      where: {

        studentId,

        status: {

          in: [
            TCStatus.PENDING,
            TCStatus.APPROVED,
          ],

        },

      },

    });

  }

  // ==========================================
  // FIND BY TC NUMBER
  // ==========================================

  async findByTCNumber(tcNumber: string) {

    return prisma.transferCertificate.findUnique({

      where: {

        tcNumber,

      },

      include: {

        student: true,

        teacher: true,

        school: true,

      },

    });

  }

  // ==========================================
  // VERIFY CERTIFICATE
  // ==========================================

  async verifyCertificate(id: string) {

    return prisma.transferCertificate.findFirst({

      where: {

        id,

        status: TCStatus.GENERATED,

      },

      include: {

        student: true,

        teacher: true,

        school: true,

      },

    });

  }

  // ==========================================
  // STUDENT OWN TC
  // ==========================================

  async studentOwnTC(
    studentId: string,
    tcId: string
  ) {

    return prisma.transferCertificate.findFirst({

      where: {

        id: tcId,

        studentId,

      },

      include: {

        school: true,

        teacher: true,

      },

    });

  }

  // ==========================================
  // TEACHER OWN TC
  // ==========================================

  async teacherOwnTC(
    teacherId: string,
    tcId: string
  ) {

    return prisma.transferCertificate.findFirst({

      where: {

        id: tcId,

        teacherId,

      },

      include: {

        student: true,

        school: true,

      },

    });

  }

  // ==========================================
  // DASHBOARD STATISTICS
  // ==========================================

  async dashboardStatistics(schoolId: string) {

    const [

      total,

      pending,

      approved,

      rejected,

      generated,

    ] = await Promise.all([

      prisma.transferCertificate.count({

        where: {

          schoolId,

        },

      }),

      prisma.transferCertificate.count({

        where: {

          schoolId,

          status: TCStatus.PENDING,

        },

      }),

      prisma.transferCertificate.count({

        where: {

          schoolId,

          status: TCStatus.APPROVED,

        },

      }),

      prisma.transferCertificate.count({

        where: {

          schoolId,

          status: TCStatus.REJECTED,

        },

      }),

      prisma.transferCertificate.count({

        where: {

          schoolId,

          status: TCStatus.GENERATED,

        },

      }),

    ]);

    return {

      total,

      pending,

      approved,

      rejected,

      generated,

    };

  }

}