import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTeacherSubject() {

  const teachers = await prisma.teacher.findMany();
  const subjects = await prisma.subject.findMany();

  if (!teachers.length || !subjects.length) {
    console.log("❌ Teachers or Subjects not found");
    return;
  }

  let teacherIndex = 0;

  for (const subject of subjects) {

    const teacher = teachers[teacherIndex % teachers.length];

    const exists = await prisma.teacherSubject.findFirst({
      where: {
        teacherId: teacher.id,
        subjectId: subject.id
      }
    });

    if (!exists) {
      await prisma.teacherSubject.create({
        data: {
          teacherId: teacher.id,
          subjectId: subject.id
        }
      });
    }

    teacherIndex++;
  }

  console.log("✅ Teacher-Subject Mapping Completed");
}