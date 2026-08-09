import { TimetableRepository } from "../repositories/timetable.repository";
import {
  CreateTimetableDTO,
  UpdateTimetableDTO,
} from "../interfaces/timetable.interface";
import type { DayOfWeek } from "@prisma/client";

const repository = new TimetableRepository();

export class TimetableService {
  async create(data: CreateTimetableDTO) {
    const teacherConflict =
      await repository.teacherConflict(
        data.teacherId,
        data.day,
        data.startTime,
        data.endTime,
      );

    if (teacherConflict) {
      throw new Error(
        "Teacher already has another lecture at this time.",
      );
    }

    const classConflict =
      await repository.classConflict(
        data.classId,
        data.sectionId,
        data.day,
        data.startTime,
        data.endTime,
      );

    if (classConflict) {
      throw new Error(
        "Class already has another lecture at this time.",
      );
    }

    if (data.roomNo) {
      const roomConflict =
        await repository.roomConflict(
          data.roomNo,
          data.day,
          data.startTime,
          data.endTime,
        );

      if (roomConflict) {
        throw new Error(
          "Room already occupied during this time.",
        );
      }
    }

    return repository.create(data);
  }

  async getAll(
    page = 1,
    limit = 10,
    search?: string,
  ) {
    return repository.findAll(
      page,
      limit,
      search,
    );
  }

  async getById(id: string) {
    const timetable =
      await repository.findById(id);

    if (!timetable) {
      throw new Error("Timetable not found.");
    }

    return timetable;
  }

  async update(
    id: string,
    data: UpdateTimetableDTO,
  ) {
    const timetable =
      await repository.findById(id);

    if (!timetable) {
      throw new Error("Timetable not found.");
    }

    return repository.update(id, data);
  }

  async delete(id: string) {
    const timetable =
      await repository.findById(id);

    if (!timetable) {
      throw new Error("Timetable not found.");
    }

    await repository.delete(id);

    return {
      success: true,
      message: "Timetable deleted successfully.",
    };
  }

  async getTeacherTimetable(
    teacherId: string,
  ) {
    return repository.findTeacherTimetable(
      teacherId,
    );
  }

  async getClassTimetable(classId: string) {
    return repository.findClassTimetable(
      classId,
    );
  }

  async getSectionTimetable(
    sectionId: string,
  ) {
    return repository.findSectionTimetable(
      sectionId,
    );
  }

  async today(day: DayOfWeek) {
    return repository.today(day);
  }

  async weekly() {
    return repository.weekly();
  }
}