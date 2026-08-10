const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:5000/api/v1";

export async function getTeacherProfile(
  token: string
) {
  const response = await fetch(
    `${API}/teacher/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}