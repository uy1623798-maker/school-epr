import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedClasses(
  schoolId: string,
  sessionId: string
) {

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];

  for (const cls of classes) {

    const code = `CLASS_${cls}`;

    const exists = await prisma.academicClass.findUnique({
      where: {
        code
      }
    });

    if (exists) continue;

    await prisma.academicClass.create({

      data: {

        name: cls,

        code,

        maximumStudents: 50,

        schoolId,

        academicSessionId: sessionId

      }

    });

    console.log(`✅ ${cls} Created`);

  }

}