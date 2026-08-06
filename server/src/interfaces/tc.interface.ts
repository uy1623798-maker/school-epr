import { TCReason, TCStatus } from "@prisma/client";

export interface CreateTCDTO {

  studentId: string;

  teacherId: string;

  schoolId: string;

  reason: TCReason;

  description?: string;

  documentUrl?: string;

}

export interface UpdateTCDTO {

  reason?: TCReason;

  description?: string;

  documentUrl?: string;

  status?: TCStatus;

  remarks?: string;

}

export interface TCFilterDTO {

  page?: number;

  limit?: number;

  search?: string;

  status?: TCStatus;

  schoolId?: string;

  teacherId?: string;

  studentId?: string;

}