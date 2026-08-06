"use client";

import { useState } from "react";

import ClassSelector from "@/components/teachers/attendance/ClassSelector";
import StudentAttendanceList from "@/components/teachers/attendance/StudentAttendanceList";

export interface SelectedClass {
  className: string;
  section: string;
}

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] =
    useState<SelectedClass | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Take Attendance
        </h1>

        <p className="mt-2 text-slate-500">
          Select class and section, then mark student attendance.
        </p>
      </div>

      <ClassSelector onSelect={setSelectedClass} />

      {selectedClass ? (
        <StudentAttendanceList selectedClass={selectedClass} />
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="text-lg font-semibold text-slate-700">
            Select class and section
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Students will appear here after selection.
          </p>
        </div>
      )}
    </div>
  );
}