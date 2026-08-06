import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedSchool() {

  let school = await prisma.school.findFirst();

  if (!school) {

    school = await prisma.school.create({
      data: {
        name: "We Take FWD Public School",
        code: "WTF001",
        email: "school@wetakefwd.com",
        phone: "9876543210",
        address: "Kanpur, Uttar Pradesh"
      }
    });

    console.log("✅ School Created");

  }

  return school;

}