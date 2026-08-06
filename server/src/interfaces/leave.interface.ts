import { LeaveStatus, LeaveType } from "@prisma/client";

export interface CreateLeaveDTO {
  title: string;
  reason: string;

  leaveType: LeaveType;

  fromDate: Date;
  toDate: Date;

  attachment?: string;

  userId: string;
  schoolId: string;
}

export interface UpdateLeaveDTO {
  title?: string;
  reason?: string;

  leaveType?: LeaveType;

  fromDate?: Date;
  toDate?: Date;

  attachment?: string;

  status?: LeaveStatus;
}

export interface LeaveFilterDTO {
  page?: number;
  limit?: number;

  status?: LeaveStatus;

  leaveType?: LeaveType;

  userId?: string;

  schoolId?: string;

  search?: string;
}