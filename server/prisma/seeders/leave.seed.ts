import {
  PrismaClient,
  LeaveStatus,
  LeaveType,
  UserRole,
} from "@prisma/client";

const prisma = new PrismaClient();

export async function seedLeave(schoolId: string) {

  console.log("🌱 Seeding Leaves...");

  const users = await prisma.user.findMany({
    where: {
      schoolId,
      role: {
        in: [UserRole.TEACHER, UserRole.STUDENT],
      },
    },
  });

  if (!users.length) {
    console.log("❌ No Teachers/Students Found");
    return;
  }

  const leaveTypes: LeaveType[] = [
    LeaveType.CASUAL,
    LeaveType.MEDICAL,
    LeaveType.EMERGENCY,
    LeaveType.HALF_DAY,
  ];

  const leaveStatus: LeaveStatus[] = [
    LeaveStatus.PENDING,
    LeaveStatus.APPROVED,
    LeaveStatus.REJECTED,
  ];

  let typeIndex = 0;
  let statusIndex = 0;

  for (const user of users) {

    for (let i = 1; i <= 3; i++) {

      const title = `${leaveTypes[typeIndex]} Leave ${i}`;

      const exists = await prisma.leave.findFirst({
        where: {
          userId: user.id,
          title,
        },
      });

      if (exists) continue;

      await prisma.leave.create({

        data: {

          title,

          reason:
            `Demo ${leaveTypes[typeIndex]} Leave Request`,

          fromDate: new Date(
            Date.now() + i * 86400000
          ),

          toDate: new Date(
            Date.now() + (i + 2) * 86400000
          ),

          leaveType: leaveTypes[typeIndex],

          status: leaveStatus[statusIndex],

          userId: user.id,

          schoolId,

          approvedAt:
            leaveStatus[statusIndex] ===
            LeaveStatus.APPROVED
              ? new Date()
              : null,

        },

      });

      typeIndex++;

      statusIndex++;

      if (typeIndex >= leaveTypes.length)
        typeIndex = 0;

      if (statusIndex >= leaveStatus.length)
        statusIndex = 0;

    }

  }

  console.log("✅ Leave Seeder Completed");

}