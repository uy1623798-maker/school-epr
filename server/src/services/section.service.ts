import { SectionRepository } from "../repositories/section.repository";

const repository = new SectionRepository();

export class SectionService {

  async createSection(data: any) {
    return repository.create(data);
  }

  async getSections() {
    return repository.findAll();
  }

  async getSection(id: string) {
    return repository.findById(id);
  }

  async updateSection(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteSection(id: string) {
    return repository.delete(id);
  }
}