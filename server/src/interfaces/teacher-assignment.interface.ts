export interface AssignmentItemDTO {
  classId: string;
  sectionId: string;
  subjectId: string;
}

export interface CreateTeacherAssignmentDTO {
  teacherId: string;
  assignments: AssignmentItemDTO[];
}

export interface UpdateTeacherAssignmentDTO {
  assignments: AssignmentItemDTO[];
}

export interface TeacherAssignmentResponse {
  teacherId: string;
  teacherName: string;
  assignments: {
    id: string;
    classId: string;
    className: string;
    sectionId: string;
    sectionName: string;
    subjectId: string;
    subjectName: string;
  }[];
}