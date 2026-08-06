export type AttendanceStatus =
  | "PRESENT"
  | "ABSENT"
  | "LATE"
  | "HALF_DAY"
  | "LEAVE";

export interface AttendanceItemDTO {
  studentId: string;
  status: AttendanceStatus;
  remarks?: string;
}

export interface BulkAttendanceDTO {
  date: string;
  teacherId: string;
  schoolId: string;
  classId: string;
  sectionId: string;
  attendance: AttendanceItemDTO[];
}

export interface AttendanceDTO {
  date: Date;
  status: AttendanceStatus;
  remarks?: string;
  studentId: string;
  teacherId: string;
  schoolId: string;
  classId: string;
  sectionId: string;
}