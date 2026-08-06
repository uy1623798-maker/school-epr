"use client";

import { CalendarDays } from "lucide-react";

export default function AttendanceHeader() {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Attendance
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-300">
          Monitor your attendance records and monthly performance.
        </p>
      </div>

      <button className="flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">
        <CalendarDays size={22} />
        July 2026
      </button>

    </div>
  );
}