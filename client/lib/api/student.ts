const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api/v1";

export interface StudentRecord {
  id: string;
  admissionNo: string;
  rollNumber: number;
  firstName: string;
  lastName: string;
  profileImage: string | null;
  classId: string;
  sectionId: string;
}

interface StudentsResponse {
  success: boolean;
  message?: string;
  data?: StudentRecord[];
}

export async function getStudents(
  classId: string,
  sectionId: string,
) {
  const query = new URLSearchParams({ classId, sectionId });
  const response = await fetch(`${API}/students/by-class?${query}`);
  const result = (await response.json()) as StudentsResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Unable to load students.");
  }

  return result.data ?? [];
}
