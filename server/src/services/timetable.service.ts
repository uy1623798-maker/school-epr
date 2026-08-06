import { TimetableRepository } from "../repositories/timetable.repository";
import {
  CreateTimetableDTO,
  UpdateTimetableDTO,
} from "../interfaces/timetable.interface";

const repository = new TimetableRepository();

export class TimetableService {

  // =====================================
  // CREATE
  // =====================================

  async create(data: CreateTimetableDTO) {

    // Teacher Conflict
    const teacherConflict = await repository.teacherConflict(
      data.teacherId,
      data.day,
      data.startTime,
      data.endTime
    );

    if (teacherConflict) {
      throw new Error(
        "Teacher already has another lecture at this time."
      );
    }

    // Class Conflict
    const classConflict = await repository.classConflict(
      data.classId,
      data.sectionId,
      data.day,
      data.startTime,
      data.endTime
    );

    if (classConflict) {
      throw new Error(
        "Class already has another lecture at this time."
      );
    }

    // Room Conflict
    if (data.roomNo) {

      const roomConflict = await repository.roomConflict(
        data.roomNo,
        data.day,
        data.startTime,
        data.endTime
      );

      if (roomConflict) {
        throw new Error(
          "Room already occupied during this time."
        );
      }

    }

    return repository.create(data);

  }

  // =====================================
  // GET ALL
  // =====================================

  async getAll(
    page = 1,
    limit = 10,
    search?: string
  ) {

    return repository.findAll(
      page,
      limit,
      search
    );

  }

  // =====================================
  // GET BY ID
  // =====================================

  async getById(id: string) {

    const timetable =
      await repository.findById(id);

    if (!timetable) {
      throw new Error("Timetable not found.");
    }

    return timetable;

  }

  // =====================================
  // UPDATE
  // =====================================

  async update(
    id: string,
    data: UpdateTimetableDTO
  ) {

    const exists =
      await repository.findById(id);

    if (!exists) {
      throw new Error("Timetable not found.");
    }

    return repository.update(id, data);

  }

  // =====================================
  // DELETE
  // =====================================

  async delete(id: string) {

    const exists =
      await repository.findById(id);

    if (!exists) {
      throw new Error("Timetable not found.");
    }

    await repository.delete(id);

    return {

      success: true,

      message:
        "Timetable deleted successfully."

    };

  }

  // =====================================
  // TEACHER TIMETABLE
  // =====================================

  async getTeacherTimetable(
    teacherId: string
  ) {

    return repository.findTeacherTimetable(
      teacherId
    );

  }

  // =====================================
  // CLASS TIMETABLE
  // =====================================

  async getClassTimetable(
    classId: string
  ) {

    return repository.findClassTimetable(
      classId
    );

  }

  // =====================================
  // SECTION TIMETABLE
  // =====================================

  async getSectionTimetable(
    sectionId: string
  ) {

    return repository.findSectionTimetable(
      sectionId
    );

  }

  // =====================================
  // TODAY
  // =====================================

  async today(day: any) {

    return repository.today(day);

  }

  // =====================================
  // WEEKLY
  // =====================================

  async weekly() {

    return repository.weekly();

  }

}