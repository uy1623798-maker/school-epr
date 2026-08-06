export const API = {
  BASE_URL:
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1",

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    ME: "/auth/me",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },

  DASHBOARD: "/dashboard",

  STUDENTS: "/students",
  TEACHERS: "/teachers",
  PARENTS: "/parents",

  CLASSES: "/classes",
  SECTIONS: "/sections",
  SUBJECTS: "/subjects",

  ATTENDANCE: "/attendance",
  TIMETABLE: "/timetable",
  HOMEWORK: "/homework",
  LEAVE: "/leave",

  EXAMS: "/exams",
  MARKS: "/marks",

  NOTICE: "/notices",

  TC: "/tc",

  FEES: "/fees",

  EVENTS: "/events",

  GALLERY: "/gallery",

  SETTINGS: "/settings",
};