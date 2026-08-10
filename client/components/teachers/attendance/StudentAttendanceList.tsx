"use client";

import { useEffect, useMemo, useState } from "react";

import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Save,
  XCircle,
} from "lucide-react";



import type { SelectedClass } from "@/app/dashboard/teacher/attendance/page";
import {
  saveAttendance,
  getStudents,
  getToken,
} from "@/lib/api";
type AttendanceStatus = "PRESENT" | "ABSENT" | "LEAVE";

interface StudentAttendanceListProps {
  selectedClass: SelectedClass;
}

interface Student {
  id: number;
  name: string;
  rollNumber: number;
}

const students: Student[] = [
  { id: 1, name: "Aarav Sharma", rollNumber: 1 },
  { id: 2, name: "Priya Singh", rollNumber: 2 },
  { id: 3, name: "Rohan Verma", rollNumber: 3 },
  { id: 4, name: "Ananya Gupta", rollNumber: 4 },
  { id: 5, name: "Aditya Yadav", rollNumber: 5 },
  { id: 6, name: "Kavya Mishra", rollNumber: 6 },
];

export default function StudentAttendanceList({
  selectedClass,
}: StudentAttendanceListProps) {
  const initialAttendance = useMemo(() => {
    return students.reduce<Record<number, AttendanceStatus>>(
      (result, student) => {
        result[student.id] = "PRESENT";
        return result;
      },
      {},
    );
  }, []);

  const [attendance, setAttendance] =
    useState<Record<number, AttendanceStatus>>(initialAttendance);

  const markAttendance = (
    studentId: number,
    status: AttendanceStatus,
  ) => {
    setAttendance((current) => ({
      ...current,
      [studentId]: status,
    }));
  };

  const markAllPresent = () => {
    const updated = students.reduce<
      Record<number, AttendanceStatus>
    >((result, student) => {
      result[student.id] = "PRESENT";
      return result;
    }, {});

    setAttendance(updated);
  };

  const handleSaveAttendance = () => {
    const payload = students.map((student) => ({
      studentId: student.id,
      status: attendance[student.id],
    }));

    console.log("Attendance payload:", {
      className: selectedClass.className,
      section: selectedClass.section,
      date: new Date().toISOString(),
      attendance: payload,
    });

    window.alert("Attendance saved successfully.");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Class {selectedClass.className} - {selectedClass.section}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {students.length} students
          </p>
        </div>

        <button
          type="button"
          onClick={markAllPresent}
          className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
        >
          Mark All Present
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px]">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm font-semibold text-slate-600">
              <th className="px-6 py-4">Roll No.</th>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Attendance</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => {
              const status = attendance[student.id];

              return (
                <tr
                  key={student.id}
                  className="border-t border-slate-100"
                >
                  <td className="px-6 py-5 font-medium text-slate-700">
                    {student.rollNumber}
                  </td>

                  <td className="px-6 py-5 font-semibold text-slate-900">
                    {student.name}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          markAttendance(student.id, "PRESENT")
                        }
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                          status === "PRESENT"
                            ? "bg-emerald-600 text-white"
                            : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        <CheckCircle2 size={16} />
                        Present
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          markAttendance(student.id, "ABSENT")
                        }
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                          status === "ABSENT"
                            ? "bg-red-600 text-white"
                            : "bg-red-50 text-red-700 hover:bg-red-100"
                        }`}
                      >
                        <XCircle size={16} />
                        Absent
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          markAttendance(student.id, "LEAVE")
                        }
                        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                          status === "LEAVE"
                            ? "bg-amber-500 text-white"
                            : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                        }`}
                      >
                        <Clock3 size={16} />
                        Leave
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end border-t border-slate-200 p-6">
        <button
          type="button"
          onClick={handleSaveAttendance}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
        >
          <Save size={19} />
          Save Attendance
        </button>
      </div>
    </div>
  );
}