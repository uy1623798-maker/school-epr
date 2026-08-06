import prisma from "../config/prisma";
import {
  Prisma,
  LeaveStatus,
  LeaveType,
} from "@prisma/client";

import {
  CreateLeaveDTO,
  UpdateLeaveDTO,
  LeaveFilterDTO,
} from "../interfaces/leave.interface";

export class LeaveRepository {

  // ==========================================
  // CREATE LEAVE
  // ==========================================

  async create(data: CreateLeaveDTO) {

    return prisma.leave.create({

      data,

      include: {

        user: true,

        school: true,

      },

    });

  }

  // ==========================================
  // GET ALL LEAVES
  // ==========================================

  async findAll(filters: LeaveFilterDTO) {

    const {

      page = 1,

      limit = 10,

      status,

      leaveType,

      userId,

      schoolId,

      search,

    } = filters;

    const skip = (page - 1) * limit;

    const where: Prisma.LeaveWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (leaveType) {
      where.leaveType = leaveType;
    }

    if (userId) {
      where.userId = userId;
    }

    if (schoolId) {
      where.schoolId = schoolId;
    }

    if (search) {

      where.OR = [

        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },

        {
          reason: {
            contains: search,
            mode: "insensitive",
          },
        },

        {
          user: {
            firstName: {
              contains: search,
              mode: "insensitive",
            },
          },
        },

        {
          user: {
            lastName: {
              contains: search,
              mode: "insensitive",
            },
          },
        },

      ];

    }

    const [data, total] = await Promise.all([

      prisma.leave.findMany({

        where,

        skip,

        take: limit,

        include: {

          user: true,

          school: true,

        },

        orderBy: {

          createdAt: "desc",

        },

      }),

      prisma.leave.count({

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

    return prisma.leave.findUnique({

      where: {

        id,

      },

      include: {

        user: true,

        school: true,

      },

    });

  }

  // ==========================================
  // UPDATE
  // ==========================================

  async update(

    id: string,

    data: UpdateLeaveDTO

  ) {

    return prisma.leave.update({

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

    return prisma.leave.delete({

      where: {

        id,

      },

    });

  }

  // ==========================================
  // APPROVE LEAVE
  // ==========================================

  async approve(

    id: string,

    approvedBy: string

  ) {

    return prisma.leave.update({

      where: {

        id,

      },

      data: {

        status: LeaveStatus.APPROVED,

        approvedBy,

        approvedAt: new Date(),

      },

    });

  }

  // ==========================================
  // REJECT LEAVE
  // ==========================================

  async reject(

    id: string,

    approvedBy: string

  ) {

    return prisma.leave.update({

      where: {

        id,

      },

      data: {

        status: LeaveStatus.REJECTED,

        approvedBy,

        approvedAt: new Date(),

      },

    });

  }

}