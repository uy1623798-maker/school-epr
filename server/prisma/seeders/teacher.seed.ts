import { PrismaClient, Gender } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedTeachers(
  schoolId: string
) {

  const teachers = [
    {
      employeeId: "EMP001",
      firstName: "Amit",
      lastName: "Sharma",
      email: "amit@school.com",
      phone: "9000000001",
      gender: Gender.MALE,
      qualification: "M.Sc Mathematics",
      experience: 5,
      joiningDate: new Date("2022-04-01"),
      salary: 35000
    },
    {
      employeeId: "EMP002",
      firstName: "Priya",
      lastName: "Verma",
      email: "priya@school.com",
      phone: "9000000002",
      gender: Gender.FEMALE,
      qualification: "M.A English",
      experience: 4,
      joiningDate: new Date("2021-04-01"),
      salary: 34000
    },
    {
      employeeId: "EMP003",
      firstName: "Rahul",
      lastName: "Singh",
      email: "rahul@school.com",
      phone: "9000000003",
      gender: Gender.MALE,
      qualification: "M.Sc Physics",
      experience: 8,
      joiningDate: new Date("2020-04-01"),
      salary: 45000
    },
    {
      employeeId: "EMP004",
      firstName: "Neha",
      lastName: "Gupta",
      email: "neha@school.com",
      phone: "9000000004",
      gender: Gender.FEMALE,
      qualification: "M.Sc Chemistry",
      experience: 6,
      joiningDate: new Date("2021-04-01"),
      salary: 40000
    },
    {
      employeeId: "EMP005",
      firstName: "Vikas",
      lastName: "Yadav",
      email: "vikas@school.com",
      phone: "9000000005",
      gender: Gender.MALE,
      qualification: "MCA",
      experience: 5,
      joiningDate: new Date("2022-04-01"),
      salary: 42000
    }
  ];

  for (const teacher of teachers) {

    const exists = await prisma.teacher.findUnique({
      where: {
        employeeId: teacher.employeeId
      }
    });

    if (exists) continue;

    await prisma.teacher.create({
      data: {
        ...teacher,
        schoolId
      }
    });

    console.log(`✅ ${teacher.firstName} Created`);

  }

}