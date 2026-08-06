import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedAcademicSession(schoolId: string) {

  const exists = await prisma.academicSession.findFirst({
    where: {
      schoolId,
      name: "2026-2027"
    }
  });

  if (exists) {
    console.log("✅ Academic Session Already Exists");
    return exists;
  }

  const session = await prisma.academicSession.create({
    data: {
      name: "2026-2027",
      startDate: new Date("2026-04-01"),
      endDate: new Date("2027-03-31"),
      description: "Default Academic Session",
      isActive: true,
      schoolId
    }
  });

  console.log("✅ Academic Session Created");

  return session;
}