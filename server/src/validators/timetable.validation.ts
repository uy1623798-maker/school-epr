export interface CreateTimetableDTO {

  day: string;

  startTime: string;

  endTime: string;

  roomNo?: string;

  teacherId: string;

  classId: string;

  sectionId: string;

  subjectId: string;

  schoolId: string;

}

export interface UpdateTimetableDTO {

  day?: string;

  startTime?: string;

  endTime?: string;

  roomNo?: string;

  teacherId?: string;

  classId?: string;

  sectionId?: string;

  subjectId?: string;

}