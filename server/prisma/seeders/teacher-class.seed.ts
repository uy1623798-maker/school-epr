import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTeacherClass() {

  const teachers = await prisma.teacher.findMany();
  const classes = await prisma.academicClass.findMany();

  if (!teachers.length || !classes.length) {
    console.log("❌ Teachers or Classes not found");
    return;
  }

  let teacherIndex = 0;

  for (const cls of classes) {

    const teacher = teachers[teacherIndex % teachers.length];

    const exists = await prisma.teacherClass.findFirst({
      where: {
        teacherId: teacher.id,
        classId: cls.id
      }
    });

    if (!exists) {
      await prisma.teacherClass.create({
        data: {
          teacherId: teacher.id,
          classId: cls.id
        }
      });
    }

    teacherIndex++;
  }

  console.log("✅ Teacher-Class Mapping Completed");
}