import { SubjectRepository } from "../repositories/subject.repository";

const repository = new SubjectRepository();

export class SubjectService {

  async createSubject(data: any) {
    return repository.create(data);
  }

  async getSubjects() {
    return repository.findAll();
  }

  async getSubject(id: string) {
    return repository.findById(id);
  }

  async updateSubject(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteSubject(id: string) {
    return repository.delete(id);
  }

}