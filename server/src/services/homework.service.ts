import { HomeworkRepository } from "../repositories/homework.repository";
import {
  CreateHomeworkDTO,
  UpdateHomeworkDTO,
  SubmitHomeworkDTO,
} from "../interfaces/homework.interface";

const repository = new HomeworkRepository();

export class HomeworkService {

  // =====================================
  // CREATE HOMEWORK
  // =====================================

  async create(data: CreateHomeworkDTO) {

    return repository.create(data);

  }

  // =====================================
  // GET ALL HOMEWORK
  // =====================================

  async getAll() {

    return repository.findAll();

  }

  // =====================================
  // GET HOMEWORK BY ID
  // =====================================

  async getById(id: string) {

    const homework = await repository.findById(id);

    if (!homework) {
      throw new Error("Homework not found.");
    }

    return homework;

  }

  // =====================================
  // UPDATE HOMEWORK
  // =====================================

  async update(
    id: string,
    data: UpdateHomeworkDTO
  ) {

    const exists = await repository.findById(id);

    if (!exists) {
      throw new Error("Homework not found.");
    }

    return repository.update(id, data);

  }

  // =====================================
  // DELETE HOMEWORK
  // =====================================

  async delete(id: string) {

    const exists = await repository.findById(id);

    if (!exists) {
      throw new Error("Homework not found.");
    }

    await repository.delete(id);

    return {
      success: true,
      message: "Homework deleted successfully."
    };

  }

  // =====================================
  // SUBMIT HOMEWORK
  // =====================================

  async submit(data: SubmitHomeworkDTO) {

    const homework = await repository.findById(
      data.homeworkId
    );

    if (!homework) {
      throw new Error("Homework not found.");
    }

    return repository.submitHomework({
      homeworkId: data.homeworkId,
      studentId: data.studentId,
      attachment: data.attachment,
      remarks: data.remarks,
      submittedAt: new Date(),
      status: "SUBMITTED",
    });

  }

  // =====================================
  // TEACHER HOMEWORK
  // =====================================

  async teacherHomework(
    teacherId: string
  ) {

    return repository.teacherHomework(
      teacherId
    );

  }

  // =====================================
  // STUDENT HOMEWORK
  // =====================================

  async studentHomework(
    studentId: string
  ) {

    return repository.studentHomework(
      studentId
    );

  }

} 