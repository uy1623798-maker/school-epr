import prisma from "../config/prisma";
import { CreateHomeworkDTO } from "../interfaces/homework.interface";

export class HomeworkRepository {

  async create(data: CreateHomeworkDTO) {

    return prisma.homework.create({

      data,

      include: {

        teacher: true,

        academicClass: true,

        section: true,

        subject: true

      }

    });

  }

  async findAll() {

    return prisma.homework.findMany({

      include: {

        teacher: true,

        academicClass: true,

        section: true,

        subject: true,

        submissions: true

      },

      orderBy: {

        createdAt: "desc"

      }

    });

  }

  async findById(id: string) {

    return prisma.homework.findUnique({

      where: { id },

      include: {

        teacher: true,

        academicClass: true,

        section: true,

        subject: true,

        submissions: true

      }

    });

  }

  async update(id: string, data: any) {

    return prisma.homework.update({

      where: { id },

      data

    });

  }

  async delete(id: string) {

    return prisma.homework.delete({

      where: { id }

    });

  }

  async submitHomework(data:any){

    return prisma.homeworkSubmission.create({

      data

    });

  }

  async teacherHomework(teacherId:string){

    return prisma.homework.findMany({

      where:{teacherId},

      include:{
        subject:true,
        academicClass:true,
        section:true
      }

    });

  }

  async studentHomework(studentId:string){

    return prisma.homeworkSubmission.findMany({

      where:{studentId},

      include:{

        homework:true

      }

    });

  }

} 