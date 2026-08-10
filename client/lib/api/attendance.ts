const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api/v1";

export interface AttendanceItem {
  studentId: string;
  status: "PRESENT" | "ABSENT" | "LEAVE";
}

export interface AttendancePayload {
  classId: string;
  sectionId: string;
  teacherId: string;
  schoolId: string;
  date: string;
  attendance: AttendanceItem[];
}

export async function saveAttendance(
  payload: AttendancePayload,
  token: string
) {
  const response = await fetch(
    `${API}/attendance/bulk`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(payload),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? "Unable to save attendance."
    );
  }

  return result;
}

export async function getStudentAttendance(
  studentId: string,
  token: string
) {
  const response = await fetch(
    `${API}/attendance/student/${studentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? "Unable to load attendance."
    );
  }

  return result;
}