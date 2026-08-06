import { PrismaClient, DayOfWeek } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTimetable(schoolId: string) {

  console.log("🌱 Seeding Timetable...");

  const teachers = await prisma.user.findMany({
    where: {
      role: "TEACHER",
      schoolId,
    },
  });

  const classes = await prisma.academicClass.findMany({
    where: {
      schoolId,
    },
  });

  const subjects = await prisma.subject.findMany({
    where: {
      schoolId,
    },
  });

  const days: DayOfWeek[] = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const periods = [
    { start: "08:00", end: "08:45" },
    { start: "08:45", end: "09:30" },
    { start: "09:45", end: "10:30" },
    { start: "10:30", end: "11:15" },
    { start: "11:30", end: "12:15" },
    { start: "12:15", end: "01:00" },
  ];

  let teacherIndex = 0;
  let subjectIndex = 0;

  for (const academicClass of classes) {

    const sections = await prisma.section.findMany({
      where: {
        classId: academicClass.id,
      },
    });

    const classSubjects = subjects.filter(
      (s) => s.classId === academicClass.id
    );

    if (!classSubjects.length) continue;

    for (const section of sections) {

      for (const day of days) {

        for (const period of periods) {

          const teacher =
            teachers[teacherIndex % teachers.length];

          const subject =
            classSubjects[
              subjectIndex % classSubjects.length
            ];

          teacherIndex++;
          subjectIndex++;

          const exists = await prisma.timetable.findFirst({
            where: {
              schoolId,
              classId: academicClass.id,
              sectionId: section.id,
              day,
              startTime: period.start,
            },
          });

          if (exists) continue;

          await prisma.timetable.create({
            data: {
              schoolId,

              classId: academicClass.id,

              sectionId: section.id,

              teacherId: teacher.id,

              subjectId: subject.id,

              day,

              startTime: period.start,

              endTime: period.end,
            },
          });

        }

      }

    }

  }

  console.log("✅ Timetable Seed Completed");

}