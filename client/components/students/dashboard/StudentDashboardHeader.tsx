"use client";

import { GraduationCap } from "lucide-react";

export default function StudentDashboardHeader() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">

            <GraduationCap
              size={38}
              className="text-white"
            />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-white">
              Welcome Rahul Sharma 
            </h1>

            <p className="mt-2 text-slate-400">
              Class XII-A • Roll No : 18
            </p>

            <p className="mt-1 text-slate-500">
              Admission No : ADM00125
            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-emerald-600 px-6 py-3 text-white">

          Attendance

          <span className="ml-2 text-2xl font-bold">
            94%
          </span>

        </div>

      </div>

    </div>
  );
}