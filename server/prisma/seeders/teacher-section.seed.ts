import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTeacherSection() {

  const teachers = await prisma.teacher.findMany();
  const sections = await prisma.section.findMany();

  if (!teachers.length || !sections.length) {
    console.log("❌ Teachers or Sections not found");
    return;
  }

  let teacherIndex = 0;

  for (const section of sections) {

    const teacher = teachers[teacherIndex % teachers.length];

    const exists = await prisma.teacherSection.findFirst({
      where: {
        teacherId: teacher.id,
        sectionId: section.id
      }
    });

    if (!exists) {
      await prisma.teacherSection.create({
        data: {
          teacherId: teacher.id,
          sectionId: section.id
        }
      });
    }

    teacherIndex++;
  }

  console.log("✅ Teacher-Section Mapping Completed");
}