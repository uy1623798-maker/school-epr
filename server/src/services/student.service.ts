import { StudentRepository } from "../repositories/student.repository";
import { generateAdmissionNumber } from "../utils/admission-number";
import { CreateStudentDTO } from "../interfaces/student.interface";

const repository = new StudentRepository();

export class StudentService {

  async createStudent(data: CreateStudentDTO) {

    const admissionNo = generateAdmissionNumber();

    return repository.create({

      admissionNo,

      rollNumber: 1,

      firstName: data.firstName,

      lastName: data.lastName,

      email: data.email,

      password: data.password,

      phone: data.phone,

      gender: data.gender,

      dob: data.dob,

      admissionDate: data.admissionDate,

      address: data.address,

      city: data.city,

      state: data.state,

      pincode: data.pincode,

      school: {
        connect: {
          id: data.schoolId
        }
      },

      academicClass: {
        connect: {
          id: data.classId
        }
      },

      section: {
        connect: {
          id: data.sectionId
        }
      }

    });

  }

  async getStudents() {
    return repository.findAll();
  }
async getStudentsByClassAndSection(
  classId: string,
  sectionId: string,
) {
  if (!classId || !sectionId) {
    throw new Error("Class ID and section ID are required.");
  }

  return repository.findByClassAndSection(
    classId,
    sectionId,
  );
}  async getStudent(id: string) {
    return repository.findById(id);
  }

  async updateStudent(id: string, data: any) {
    return repository.update(id, data);
  }

  async deleteStudent(id: string) {
    return repository.delete(id);
  }

}