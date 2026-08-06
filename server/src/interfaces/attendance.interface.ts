export interface AttendanceDTO {
  date: Date;
  status: "PRESENT" | "ABSENT" | "LATE" | "HALF_DAY" | "LEAVE";
  remarks?: string;

  studentId: string;
  teacherId: string;
  schoolId: string;
  classId: string;
  sectionId: string;
}