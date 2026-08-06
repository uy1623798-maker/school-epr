import { PrismaClient, AttendanceStatus } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedAttendance() {

  const students = await prisma.student.findMany();

  if (students.length === 0) {
    console.log("❌ No Students Found");
    return;
  }

  for (const student of students) {

    const teacher = await prisma.teacherClass.findFirst({
      where: {
        classId: student.classId
      },
      include: {
        teacher: true
      }
    });

    if (!teacher) continue;

    const exists = await prisma.attendance.findFirst({
      where: {
        studentId: student.id,
        date: new Date("2026-07-11")
      }
    });

    if (exists) continue;

    await prisma.attendance.create({

      data: {

        date: new Date("2026-07-11"),

        status: AttendanceStatus.PRESENT,

        studentId: student.id,

        teacherId: teacher.teacher.id,

        schoolId: student.schoolId,

        classId: student.classId,

        sectionId: student.sectionId,

        remarks: "Seed Attendance"

      }

    });

  }

  console.log("✅ Attendance Seed Completed");

}