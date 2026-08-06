import { Request, Response } from "express";
import { StudentService } from "../services/student.service";

const service = new StudentService();

export class StudentController {

  async create(req: Request, res: Response) {
    try {

      const profileImage = req.file?.filename;

      const student = await service.createStudent({
        ...req.body,
        profileImage
      });

      return res.status(201).json({
        success: true,
        message: "Student Created Successfully",
        data: student
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }
  }

  async getAll(req: Request, res: Response) {

    const students = await service.getStudents();

    return res.json({
      success: true,
      data: students
    });

  }

  async getById(req: Request, res: Response) {

    const student = await service.getStudent(req.params.id);

    return res.json({
      success: true,
      data: student
    });

  }

  async update(req: Request, res: Response) {

    const profileImage = req.file?.filename;

    const student = await service.updateStudent(req.params.id,{
      ...req.body,
      profileImage
    });

    return res.json({
      success:true,
      data:student
    });

  }

  async delete(req: Request,res: Response){

    await service.deleteStudent(req.params.id);

    return res.json({
      success:true,
      message:"Student Deleted Successfully"
    });

  }

}