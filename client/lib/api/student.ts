const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api/v1";

export async function getStudents(
  classId: string,
  sectionId: string
) {
  const response = await fetch(
    `${API}/students/by-class?classId=${classId}&sectionId=${sectionId}`
  );

  return response.json();
}