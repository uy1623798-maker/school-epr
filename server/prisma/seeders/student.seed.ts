import { PrismaClient, Gender } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedStudents(schoolId: string) {

  const classes = await prisma.academicClass.findMany({
    include: {
      sections: true
    }
  });

  if (classes.length === 0) {
    console.log("❌ No Classes Found");
    return;
  }

  let admissionNo = 1001;

  for (const cls of classes) {

    for (const section of cls.sections) {

      for (let i = 1; i <= 20; i++) {

        const admission = `ADM${admissionNo}`;

        const exists = await prisma.student.findUnique({
          where: {
            admissionNo: admission
          }
        });

        if (exists) {
          admissionNo++;
          continue;
        }

        await prisma.student.create({
          data: {

            admissionNo: admission,

            rollNumber: i,

            firstName: `Student${i}`,

            lastName: section.name,

            email: `student${admissionNo}@school.com`,

            password: "123456",

            phone: `90000${admissionNo}`,

            gender: i % 2 === 0 ? Gender.MALE : Gender.FEMALE,

            dob: new Date("2012-01-01"),

            admissionDate: new Date(),

            address: "Kanpur",

            city: "Kanpur",

            state: "Uttar Pradesh",

            pincode: "208001",

            schoolId,

            classId: cls.id,

            sectionId: section.id

          }
        });

        admissionNo++;

      }

      console.log(`✅ ${cls.name}-${section.name} Students Created`);

    }

  }

  console.log("🎉 Students Created Successfully");

}