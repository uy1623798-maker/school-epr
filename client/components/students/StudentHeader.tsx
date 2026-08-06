"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function StudentHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Students
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all students of your school from one place.
        </p>
      </div>

      <Link
        href="/dashboard/teacher/students/create"
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
      >
        <Plus size={20} />

        Add Student
      </Link>

    </div>
  );
}