import { SchoolRepository } from "../repositories/school.repository";

const repository = new SchoolRepository();

export class SchoolService {

  async createSchool(data: any) {
    return repository.create(data);
  }

  async getSchools() {
    return repository.findAll();
  }

  async getSchool(id: string) {
    return repository.findById(id);
  }

  async updateSchool(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteSchool(id: string) {
    return repository.delete(id);
  }

}