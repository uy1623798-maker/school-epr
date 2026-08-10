"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Save,
  XCircle,
} from "lucide-react";

import type { SelectedClass } from "@/app/dashboard/teacher/attendance/page";
import {
  getStudents,
  getToken,
  saveAttendance,
  type StudentRecord,
} from "@/lib/api";

type MarkStatus = "PRESENT" | "ABSENT" | "LEAVE";

interface StudentAttendanceListProps {
  selectedClass: SelectedClass;
}

const today = new Date().toISOString().slice(0, 10);

export default function StudentAttendanceList({
  selectedClass,
}: StudentAttendanceListProps) {
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [attendance, setAttendance] =
    useState<Record<string, MarkStatus>>({});
  const [date, setDate] = useState(today);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let active = true;

    getStudents(selectedClass.classId, selectedClass.sectionId)
      .then((data) => {
        if (!active) return;

        setStudents(data);
        setAttendance(
          Object.fromEntries(
            data.map((student) => [student.id, "PRESENT"]),
          ),
        );
      })
      .catch((loadError: unknown) => {
        if (!active) return;

        setStudents([]);
        setAttendance({});
        setError(
          loadError instanceof Error
            ? loadError.message
            : "Unable to load students.",
        );
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [selectedClass.classId, selectedClass.sectionId]);

  const markAttendance = (
    studentId: string,
    status: MarkStatus,
  ) => {
    setAttendance((current) => ({
      ...current,
      [studentId]: status,
    }));
    setSuccess("");
  };

  const markAllPresent = () => {
    setAttendance(
      Object.fromEntries(
        students.map((student) => [student.id, "PRESENT"]),
      ),
    );
    setSuccess("");
  };

  const handleSaveAttendance = async () => {
    const token = getToken();

    if (!token) {
      setError("Please login with a teacher account first.");
      return;
    }

    if (!students.length) {
      setError("No students are available for attendance.");
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      await saveAttendance(
        {
          classId: selectedClass.classId,
          sectionId: selectedClass.sectionId,
          date,
          attendance: students.map((student) => ({
            studentId: student.id,
            status: attendance[student.id] ?? "PRESENT",
          })),
        },
        token,
      );

      setSuccess(
        `Attendance saved successfully for ${students.length} students.`,
      );
    } catch (saveError: unknown) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Unable to save attendance.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {selectedClass.className} - {selectedClass.sectionName}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {loading ? "Loading students..." : `${students.length} students`}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="text-sm font-semibold text-slate-700">
            Attendance Date
            <input
              type="date"
              value={date}
              max={today}
              onChange={(event) => setDate(event.target.value)}
              className="mt-1 block rounded-xl border border-slate-200 px-3 py-2 text-slate-800"
            />
          </label>

          <button
            type="button"
            onClick={markAllPresent}
            disabled={loading || students.length === 0}
            className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Mark All Present
          </button>
        </div>
      </div>

      {error ? (
        <div className="border-b border-red-100 bg-red-50 px-6 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      ) : null}

      {success ? (
        <div className="border-b border-emerald-100 bg-emerald-50 px-6 py-3 text-sm font-medium text-emerald-700">
          {success}
        </div>
      ) : null}

      {loading ? (
        <div className="flex items-center justify-center gap-3 p-12 text-slate-500">
          <LoaderCircle className="animate-spin" size={24} />
          Loading students...
        </div>
      ) : students.length === 0 ? (
        <div className="p-12 text-center text-slate-500">
          No active students found for this class and section.
        </div>
      ) : (
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
                  <tr key={student.id} className="border-t border-slate-100">
                    <td className="px-6 py-5 font-medium text-slate-700">
                      {student.rollNumber}
                    </td>

                    <td className="px-6 py-5 font-semibold text-slate-900">
                      {student.firstName} {student.lastName}
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
      )}

      <div className="flex justify-end border-t border-slate-200 p-6">
        <button
          type="button"
          onClick={handleSaveAttendance}
          disabled={saving || loading || students.length === 0}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? (
            <LoaderCircle className="animate-spin" size={19} />
          ) : (
            <Save size={19} />
          )}
          {saving ? "Saving..." : "Save Attendance"}
        </button>
      </div>
    </div>
  );
}
