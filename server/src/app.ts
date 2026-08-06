import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import prisma from "./config/prisma";
import { hashPassword } from "./utils/hash";
import { errorMiddleware } from "./middlewares/error.middleware";
import authRoutes from "./routes/auth.routes";
import schoolRoutes from "./routes/school.routes";
import academicSessionRoutes from "./routes/academic-session.routes";
import classRoutes from "./routes/class.routes";
import sectionRoutes from "./routes/section.routes";
import subjectRoutes from "./routes/subject.routes";
import teacherRoutes from "./routes/teacher.routes";
import studentRoutes from "./routes/student.routes";
import attendanceRoutes from "./routes/attendance.routes";
import teacherAssignmentRoutes from "./routes/teacher-assignment.routes";
import timetableRoutes from "./routes/timetable.routes";
import homeworkRoutes from "./routes/homework.routes";
import leaveRoutes from "./routes/leave.routes";
import tcRoutes from "./routes/tc.routes";
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorMiddleware);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/schools", schoolRoutes);
app.use("/api/v1/academic-sessions", academicSessionRoutes);
app.use("/api/v1/classes", classRoutes);
app.use("/api/v1/sections", sectionRoutes);

app.use("/api/v1/subjects", subjectRoutes);
app.use("/api/v1/teachers", teacherRoutes);
app.use("/api/v1/students",studentRoutes);
app.use("/api/v1/attendance", attendanceRoutes);
app.use("/api/v1/teacher-assignments", teacherAssignmentRoutes);
app.use("/api/v1/timetables", timetableRoutes);
app.use("/api/v1/homeworks", homeworkRoutes);
app.use("/api/v1/leaves", leaveRoutes);
app.use("/api/v1/tc", tcRoutes);



app.get("/hash-test", async (req, res) => {
  const password = "123456";

  const hash = await hashPassword(password);

  res.json({
    password,
    hash,
  });
});
app.get("/db-test", async (req, res) => {
  try {
    await prisma.$connect();

    res.json({
      success: true,
      message: "✅ Database Connected Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "❌ Database Connection Failed",
    });
  }
});
// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 We Take FWD School ERP Backend Running",
    version: "1.0.0",
  });
});

export default app;