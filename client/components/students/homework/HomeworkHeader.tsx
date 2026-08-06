"use client";

import { BookOpenCheck } from "lucide-react";

export default function HomeworkHeader() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white shadow-xl lg:flex-row lg:items-center">

      <div>

        <div className="mb-4 flex items-center gap-3">

          <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">

            <BookOpenCheck size={28} />

          </div>

          <h1 className="text-3xl font-bold">
            Homework
          </h1>

        </div>

        <p className="max-w-2xl text-blue-100">
          View all assigned homework, track submissions and never miss your deadlines.
        </p>

      </div>

      <div className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">

        <p className="text-sm text-blue-100">
          Pending Homework
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          06
        </h2>

      </div>

    </div>
  );
}