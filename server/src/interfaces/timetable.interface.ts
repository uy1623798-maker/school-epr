import type { DayOfWeek } from "@prisma/client";

export interface CreateTimetableDTO {
  day: DayOfWeek;

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
  day?: DayOfWeek;

  startTime?: string;

  endTime?: string;

  roomNo?: string;

  teacherId?: string;

  classId?: string;

  sectionId?: string;

  subjectId?: string;
}