"use client";

import Link from "next/link";
import { Download, UserPlus } from "lucide-react";

export default function StudentHeader() {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Student Management
        </h1>

        <p className="mt-3 text-slate-500">
          Manage students, admissions, attendance and profiles.
        </p>

      </div>

      <div className="flex gap-4">

        <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
          <Download size={20} />
          Export Excel
        </button>

        <Link
          href="/dashboard/teacher/students/create"
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <UserPlus size={20} />
          Add Student
        </Link>

      </div>

    </div>
  );
}