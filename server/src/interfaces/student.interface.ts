export interface CreateStudentDTO {

  firstName: string;

  lastName: string;

  email?: string;

  password?: string;

  phone?: string;

  gender: "MALE" | "FEMALE" | "OTHER";

  dob: Date;

  admissionDate: Date;

  address?: string;

  city?: string;

  state?: string;

  pincode?: string;

  schoolId: string;

  classId: string;

  sectionId: string;

}