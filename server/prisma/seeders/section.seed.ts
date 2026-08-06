import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedSections(
  schoolId: string
) {

  const classes = await prisma.academicClass.findMany();

  for (const cls of classes) {

    const sections = ["A", "B", "C"];

    for (const sec of sections) {

      const exists = await prisma.section.findFirst({
        where: {
          classId: cls.id,
          name: sec
        }
      });

      if (exists) continue;

      await prisma.section.create({

        data: {

          name: sec,

          code: `${cls.name}-${sec}`,

          classId: cls.id,

          schoolId

        }

      });

    }

  }

  console.log("✅ Sections Created");

}