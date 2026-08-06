import { ClassRepository } from "../repositories/class.repository";

const repository = new ClassRepository();

export class ClassService {

  async createClass(data: any) {
    return repository.create(data);
  }

  async getClasses() {
    return repository.findAll();
  }

  async getClass(id: string) {
    return repository.findById(id);
  }

  async updateClass(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteClass(id: string) {
    return repository.delete(id);
  }

}