"use client";

import { CalendarDays } from "lucide-react";

export default function TimetableHeader() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-4 flex items-center gap-3">

            <div className="rounded-2xl bg-white/20 p-3">

              <CalendarDays size={28} />

            </div>

            <h1 className="text-3xl font-bold">
              Class Timetable
            </h1>

          </div>

          <p className="max-w-2xl text-blue-100">
            View today's schedule, weekly classes and upcoming lectures.
          </p>

        </div>

        <div className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">

          <p className="text-sm text-blue-100">
            Today's Classes
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            07
          </h2>

        </div>

      </div>

    </div>
  );
}