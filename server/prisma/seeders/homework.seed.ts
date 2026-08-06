import { PrismaClient, HomeworkStatus } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedHomework(schoolId: string) {

  console.log("🌱 Seeding Homework...");

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

  if (!teachers.length || !classes.length) {
    console.log("❌ Teachers or Classes not found.");
    return;
  }

  let teacherIndex = 0;

  for (const academicClass of classes) {

    const sections = await prisma.section.findMany({
      where: {
        classId: academicClass.id,
      },
    });

    const subjects = await prisma.subject.findMany({
      where: {
        classId: academicClass.id,
      },
    });

    if (!subjects.length) continue;

    for (const section of sections) {

      let subjectIndex = 0;

      for (let i = 1; i <= 5; i++) {

        const teacher =
          teachers[teacherIndex % teachers.length];

        const subject =
          subjects[subjectIndex % subjects.length];

        teacherIndex++;
        subjectIndex++;

        const title = `${subject.name} Homework ${i}`;

        const exists = await prisma.homework.findFirst({
          where: {
            title,
            classId: academicClass.id,
            sectionId: section.id,
          },
        });

        if (exists) continue;

        await prisma.homework.create({
          data: {

            title,

            description:
              `Complete Chapter ${i} of ${subject.name}.`,

            dueDate: new Date(
              Date.now() + i * 86400000
            ),

            status: HomeworkStatus.ACTIVE,

            teacherId: teacher.id,

            subjectId: subject.id,

            classId: academicClass.id,

            sectionId: section.id,

            schoolId,

          },
        });

      }

    }

  }

  console.log("✅ Homework Seed Completed");

}