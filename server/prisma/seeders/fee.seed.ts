import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedFeeStructure(schoolId: string) {

  console.log("🌱 Seeding Fee Structure...");

  const classes = await prisma.academicClass.findMany({
    where: {
      schoolId,
    },
  });

  if (!classes.length) {
    console.log("❌ No Classes Found");
    return;
  }

  const feeMap: Record<string, number> = {
    Nursery: 1500,
    LKG: 1800,
    UKG: 2000,
    "1": 2200,
    "2": 2400,
    "3": 2600,
    "4": 2800,
    "5": 3000,
    "6": 3500,
    "7": 3800,
    "8": 4200,
    "9": 4800,
    "10": 5200,
    "11": 5800,
    "12": 6500,
  };

  for (const cls of classes) {

    const monthlyFee = feeMap[cls.name] ?? 3000;

    const exists = await prisma.feeStructure.findFirst({
      where: {
        classId: cls.id,
      },
    });

    if (exists) continue;

    await prisma.feeStructure.create({
      data: {

        schoolId,

        classId: cls.id,

        admissionFee: monthlyFee * 2,

        monthlyFee,

        examinationFee: 1000,

        annualFee: 2500,

        sportsFee: 500,

        libraryFee: 300,

        computerFee: 800,

        miscellaneousFee: 400,

        dueDay: 10,

      },
    });

    console.log(`✅ Fee Created For Class ${cls.name}`);

  }

  console.log("🎉 Fee Structure Seeder Completed");

}