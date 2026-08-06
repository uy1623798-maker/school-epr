export interface CreateHomeworkDTO {
  title: string;
  description?: string;

  attachment?: string;
  videoUrl?: string;

  dueDate: Date;

  schoolId: string;
  classId: string;
  sectionId: string;
  subjectId: string;
  teacherId: string;
}

export interface UpdateHomeworkDTO {
  title?: string;
  description?: string;

  attachment?: string;
  videoUrl?: string;

  dueDate?: Date;

  status?: "ACTIVE" | "CLOSED";
}

export interface SubmitHomeworkDTO {
  homeworkId: string;
  studentId: string;

  attachment?: string;
  remarks?: string;
}