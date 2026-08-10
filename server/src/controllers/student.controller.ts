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
async getByClassAndSection(
  req: Request,
  res: Response,
) {
  try {
    const classId =
      typeof req.query.classId === "string"
        ? req.query.classId
        : "";

    const sectionId =
      typeof req.query.sectionId === "string"
        ? req.query.sectionId
        : "";

    const students =
      await service.getStudentsByClassAndSection(
        classId,
        sectionId,
      );

    return res.status(200).json({
      success: true,
      message: "Students fetched successfully.",
      data: students,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to fetch students.";

    return res.status(400).json({
      success: false,
      message,
    });
  }
}
  async getById(req: Request, res: Response) {

    const student = await service.getStudent((req.params.id as string));

    return res.json({
      success: true,
      data: student
    });

  }

  async update(req: Request, res: Response) {

    const profileImage = req.file?.filename;

    const student = await service.updateStudent((req.params.id as string),{
      ...req.body,
      profileImage
    });

    return res.json({
      success:true,
      data:student
    });

  }

  async delete(req: Request,res: Response){

    await service.deleteStudent((req.params.id as string));

    return res.json({
      success:true,
      message:"Student Deleted Successfully"
    });

  }

}