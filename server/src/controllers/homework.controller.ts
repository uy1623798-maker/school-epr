import { Request, Response } from "express";
import { HomeworkService } from "../services/homework.service";
import {
  createHomeworkSchema,
  updateHomeworkSchema,
} from "../validators/homework.validation";

const service = new HomeworkService();

export class HomeworkController {

  // =====================================
  // CREATE HOMEWORK
  // =====================================

async create(req: Request, res: Response) {

  try {

    const attachment = req.file?.filename;

    const validatedData =
      createHomeworkSchema.parse({

        ...req.body,

        attachment

      });

    const homework =
      await service.create(validatedData);

    return res.status(201).json({

      success: true,

      message: "Homework Created Successfully",

      data: homework

    });

  } catch (error: any) {

    return res.status(400).json({

      success: false,

      message: error.errors ?? error.message

    });

  }

}

  // =====================================
  // GET ALL HOMEWORK
  // =====================================

  async getAll(req: Request, res: Response) {

    try {

      const homeworks =
        await service.getAll();

      return res.status(200).json({

        success: true,

        count: homeworks.length,

        data: homeworks

      });

    } catch (error: any) {

      return res.status(500).json({

        success: false,

        message: error.message

      });

    }

  }

  // =====================================
  // GET HOMEWORK BY ID
  // =====================================

  async getById(req: Request, res: Response) {

    try {

      const homework =
        await service.getById((req.params.id as string));

      return res.status(200).json({

        success: true,

        data: homework

      });

    } catch (error: any) {

      return res.status(404).json({

        success: false,

        message: error.message

      });

    }

  }

  // =====================================
  // UPDATE HOMEWORK
  // =====================================

  async update(req: Request, res: Response) {

    try {

      const validatedData =
        updateHomeworkSchema.parse(req.body);

      const homework =
        await service.update(
          (req.params.id as string),
          validatedData
        );

      return res.status(200).json({

        success: true,

        message: "Homework Updated Successfully",

        data: homework

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.errors ?? error.message

      });

    }

  }

  // =====================================
  // DELETE HOMEWORK
  // =====================================

  async delete(req: Request, res: Response) {

    try {

      const result =
        await service.delete((req.params.id as string));

      return res.status(200).json(result);

    } catch (error: any) {

      return res.status(404).json({

        success: false,

        message: error.message

      });

    }

  }

  // =====================================
  // SUBMIT HOMEWORK
  // =====================================

  async submit(req: Request, res: Response) {

    try {

      const submission =
        await service.submit(req.body);

      return res.status(201).json({

        success: true,

        message: "Homework Submitted Successfully",

        data: submission

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message

      });

    }

  }

  // =====================================
  // TEACHER HOMEWORK
  // =====================================

  async teacherHomework(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        await service.teacherHomework(
          (req.params.teacherId as string)
        );

      return res.status(200).json({

        success: true,

        data

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message

      });

    }

  }

  // =====================================
  // STUDENT HOMEWORK
  // =====================================

  async studentHomework(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        await service.studentHomework(
          (req.params.studentId as string)
        );

      return res.status(200).json({

        success: true,

        data

      });

    } catch (error: any) {

      return res.status(400).json({

        success: false,

        message: error.message

      });

    }

  }

}