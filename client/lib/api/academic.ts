const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api/v1";

export interface AcademicSection {
  id: string;
  name: string;
  code: string;
  classId: string;
}

export interface AcademicClass {
  id: string;
  name: string;
  code: string;
  sections: AcademicSection[];
}

interface ClassesResponse {
  success: boolean;
  message?: string;
  data?: AcademicClass[];
}

export async function getClasses() {
  const response = await fetch(`${API}/classes`);
  const result = (await response.json()) as ClassesResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Unable to load classes.");
  }

  return result.data ?? [];
}
