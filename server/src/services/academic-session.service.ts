import { AcademicSessionRepository } from "../repositories/academic-session.repository";

const repository = new AcademicSessionRepository();

export class AcademicSessionService {

  async createSession(data: any) {
    return repository.create(data);
  }

  async getSessions() {
    return repository.findAll();
  }

  async getSession(id: string) {
    return repository.findById(id);
  }

  async updateSession(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteSession(id: string) {
    return repository.delete(id);
  }

}