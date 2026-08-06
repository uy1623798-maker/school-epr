import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function seedUser(schoolId: string) {

  const admin = await prisma.user.findUnique({
    where: {
      email: "admin@wetakefwd.com"
    }
  });

  if (admin) return admin;

  const password = await bcrypt.hash("Admin@123", 10);

  return prisma.user.create({
    data: {

      firstName: "Super",

      lastName: "Admin",

      email: "admin@wetakefwd.com",

      password,

      phone: "9999999999",

      role: UserRole.SUPER_ADMIN,

      schoolId

    }
  });

}