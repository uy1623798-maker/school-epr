import { PrismaClient } from "@prisma/client";

import { seedSchool } from "./seeders/school.seed";
import { seedUser } from "./seeders/user.seed";
import { seedAcademicSession } from "./seeders/academic-session.seed";
import { seedClasses } from "./seeders/class.seed";
import { seedSections } from "./seeders/section.seed";
import { seedSubjects } from "./seeders/subject.seed";
import { seedTeachers } from "./seeders/teacher.seed";
import { seedStudents } from "./seeders/student.seed";
import { seedTeacherClass } from "./seeders/teacher-class.seed";
import { seedTeacherSection } from "./seeders/teacher-section.seed";
import { seedTeacherSubject } from "./seeders/teacher-subject.seed";
import { seedAttendance } from "./seeders/attendance.seed";
import { seedTimetable } from "./seeders/timetable.seed";
import { seedHomework } from "./seeders/homework.seed";
import { seedLeave } from "./seeders/leave.seed";
import { seedFeeStructure } from "./seeders/fee.seed";




const prisma = new PrismaClient();

async function main() {
  console.log("🌱 ==================================");
  console.log("🌱 AI SCHOOL ERP DATABASE SEED START");
  console.log("🌱 ==================================");

  // ==========================================
  // SCHOOL
  // ==========================================

  const school = await seedSchool();

  // ==========================================
  // SUPER ADMIN
  // ==========================================

  await seedUser(school.id);

  // ==========================================
  // ACADEMIC SESSION
  // ==========================================

  const session = await seedAcademicSession(school.id);

  // ==========================================
  // CLASSES
  // ==========================================

  await seedClasses(
    school.id,
    session.id
  );

  // ==========================================
  // SECTIONS
  // ==========================================

  await seedSections(school.id);

  // ==========================================
  // SUBJECTS
  // ==========================================

  await seedSubjects(school.id);

  // ==========================================
  // TEACHERS
  // ==========================================

  await seedTeachers(school.id);

  // ==========================================
  // STUDENTS
  // ==========================================

  await seedStudents(school.id);

  // ==========================================
  // TEACHER MAPPINGS
  // ==========================================

  await seedTeacherClass();

  await seedTeacherSection();

  await seedTeacherSubject();

  // ==========================================
  // ATTENDANCE
  // ==========================================

  await seedAttendance();

  console.log("");
  console.log("======================================");
  console.log("🎉 AI SCHOOL ERP SEEDED SUCCESSFULLY");
  console.log("======================================");

  await seedTimetable(school.id);
  await seedHomework(school.id);
  await seedLeave(school.id);
  await seedFeeStructure(school.id);
}

main()
  .catch((error) => {
    console.error("❌ Seed Error");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });