import { Request, Response } from "express";
import { TimetableService } from "../services/timetable.service";
import {
  createTimetableSchema,
  updateTimetableSchema,
} from "../validators/timetable.validation";
import { DayOfWeek } from "@prisma/client";

const service = new TimetableService();

export class TimetableController {

  // =====================================
  // CREATE TIMETABLE
  // =====================================

  async create(req: Request, res: Response) {

    try {

      const validatedData =
        createTimetableSchema.parse(req.body);

      const timetable =
        await service.create(validatedData);

      return res.status(201).json({
        success: true,
        message: "Timetable created successfully.",
        data: timetable
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.errors ?? error.message
      });

    }

  }

  // =====================================
  // GET ALL TIMETABLES
  // =====================================

  async getAll(req: Request, res: Response) {

    try {

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const search = req.query.search as string;

      const data = await service.getAll(
        page,
        limit,
        search
      );

      return res.status(200).json({
        success: true,
        ...data
      });

    } catch (error: any) {

      return res.status(500).json({
        success: false,
        message: error.message
      });

    }

  }

  // =====================================
  // GET TIMETABLE BY ID
  // =====================================

  async getById(req: Request, res: Response) {

    try {

      const timetable =
        await service.getById((req.params.id as string));

      return res.status(200).json({
        success: true,
        data: timetable
      });

    } catch (error: any) {

      return res.status(404).json({
        success: false,
        message: error.message
      });

    }

  }

  // =====================================
  // UPDATE TIMETABLE
  // =====================================

  async update(req: Request, res: Response) {

    try {

      const validatedData =
        updateTimetableSchema.parse(req.body);

      const timetable =
        await service.update(
          (req.params.id as string),
          validatedData
        );

      return res.status(200).json({
        success: true,
        message: "Timetable updated successfully.",
        data: timetable
      });

    } catch (error: any) {

      return res.status(400).json({
        success: false,
        message: error.errors ?? error.message
      });

    }

  }

  // =====================================
  // DELETE TIMETABLE
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
  // GET TEACHER TIMETABLE
  // =====================================

  async getTeacherTimetable(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        await service.getTeacherTimetable(
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
  // GET CLASS TIMETABLE
  // =====================================

  async getClassTimetable(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        await service.getClassTimetable(
          (req.params.classId as string)
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
  // GET SECTION TIMETABLE
  // =====================================

  async getSectionTimetable(
    req: Request,
    res: Response
  ) {

    try {

      const data =
        await service.getSectionTimetable(
          (req.params.sectionId as string)
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
  // TODAY TIMETABLE
  // =====================================

  async today(req: Request, res: Response) {

    try {

      const day =
        req.query.day as DayOfWeek;

      const data =
        await service.today(day);

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
  // WEEKLY TIMETABLE
  // =====================================

  async weekly(req: Request, res: Response) {

    try {

      const data =
        await service.weekly();

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