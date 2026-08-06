import { TeacherRepository } from "../repositories/teacher.repository";

const repository = new TeacherRepository();

export class TeacherService {

  async createTeacher(data: any) {
    return repository.create(data);
  }

  async getTeachers() {
    return repository.findAll();
  }

  async getTeacher(id: string) {
    return repository.findById(id);
  }

  async updateTeacher(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteTeacher(id: string) {
    return repository.delete(id);
  }

}