import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedSubjects(
  schoolId: string
) {

  const classes = await prisma.academicClass.findMany();

  const subjects = [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Social Science",
    "Computer",
    "GK"
  ];

  for (const cls of classes) {

    for (const subject of subjects) {

      const code =
        `${subject.replace(/\s/g, "_").toUpperCase()}_${cls.name}`;

      const exists = await prisma.subject.findUnique({
        where: {
          code
        }
      });

      if (exists) continue;

      await prisma.subject.create({

        data: {

          name: subject,

          code,

          schoolId,

          classId: cls.id

        }

      });

    }

  }

  console.log("✅ Subjects Created");

}