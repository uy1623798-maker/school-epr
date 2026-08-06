import { LeaveStatus } from "@prisma/client";

import { LeaveRepository } from "../repositories/leave.repository";

import {
  CreateLeaveDTO,
  UpdateLeaveDTO,
  LeaveFilterDTO,
} from "../interfaces/leave.interface";

const repository = new LeaveRepository();

export class LeaveService {

  // ==========================================
  // CREATE LEAVE
  // ==========================================

  async create(data: CreateLeaveDTO) {

    if (new Date(data.toDate) < new Date(data.fromDate)) {
      throw new Error("To Date must be after From Date.");
    }

    const existing = await repository.findAll({
      userId: data.userId,
      page: 1,
      limit: 1000,
    });

    const overlap = existing.data.find((leave) => {

      if (leave.status === LeaveStatus.REJECTED) {
        return false;
      }

      return (
        new Date(data.fromDate) <= new Date(leave.toDate) &&
        new Date(data.toDate) >= new Date(leave.fromDate)
      );

    });

    if (overlap) {
      throw new Error(
        "You already have another leave during this period."
      );
    }

    return repository.create(data);
  }

  // ==========================================
  // GET ALL
  // ==========================================

  async getAll(filters: LeaveFilterDTO) {
    return repository.findAll(filters);
  }

  // ==========================================
  // GET BY ID
  // ==========================================

  async getById(id: string) {

    const leave = await repository.findById(id);

    if (!leave) {
      throw new Error("Leave not found.");
    }

    return leave;
  }

  // ==========================================
  // UPDATE
  // ==========================================

  async update(
    id: string,
    data: UpdateLeaveDTO
  ) {

    const leave = await repository.findById(id);

    if (!leave) {
      throw new Error("Leave not found.");
    }

    if (
      data.fromDate &&
      data.toDate &&
      new Date(data.toDate) < new Date(data.fromDate)
    ) {
      throw new Error("Invalid leave dates.");
    }

    return repository.update(id, data);
  }

  // ==========================================
  // DELETE
  // ==========================================

  async delete(id: string) {

    const leave = await repository.findById(id);

    if (!leave) {
      throw new Error("Leave not found.");
    }

    await repository.delete(id);

    return {
      success: true,
      message: "Leave deleted successfully.",
    };
  }

  // ==========================================
  // APPROVE
  // ==========================================

  async approve(
    id: string,
    approvedBy: string
  ) {

    const leave = await repository.findById(id);

    if (!leave) {
      throw new Error("Leave not found.");
    }

    if (leave.status === LeaveStatus.APPROVED) {
      throw new Error("Leave already approved.");
    }

    return repository.approve(id, approvedBy);
  }

  // ==========================================
  // REJECT
  // ==========================================

  async reject(
    id: string,
    approvedBy: string
  ) {

    const leave = await repository.findById(id);

    if (!leave) {
      throw new Error("Leave not found.");
    }

    if (leave.status === LeaveStatus.REJECTED) {
      throw new Error("Leave already rejected.");
    }

    return repository.reject(id, approvedBy);
  }

}