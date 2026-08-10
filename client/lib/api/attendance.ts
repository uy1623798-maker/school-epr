const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api/v1";

export type AttendanceStatus =
  | "PRESENT"
  | "ABSENT"
  | "LATE"
  | "HALF_DAY"
  | "LEAVE";

export interface AttendanceItem {
  studentId: string;
  status: AttendanceStatus;
  remarks?: string;
}

export interface AttendancePayload {
  classId: string;
  sectionId: string;
  date: string;
  attendance: AttendanceItem[];
}

export async function saveAttendance(
  payload: AttendancePayload,
  token: string,
) {
  const response = await fetch(`${API}/attendance/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? "Unable to save attendance.",
    );
  }

  return result;
}

export async function getStudentAttendance(
  studentId: string,
  token: string,
) {
  const response = await fetch(
    `${API}/attendance/student/${studentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message ?? "Unable to load attendance.",
    );
  }

  return result;
}
