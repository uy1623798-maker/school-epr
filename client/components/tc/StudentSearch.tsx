"use client";

import { Search, User } from "lucide-react";
import { useState } from "react";

export default function StudentSearch() {
  const [admissionNo, setAdmissionNo] = useState("");

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <h2 className="mb-6 text-xl font-bold text-white">
        Search Student
      </h2>

      <div className="flex flex-col gap-4 lg:flex-row">

        <input
          type="text"
          value={admissionNo}
          onChange={(e) => setAdmissionNo(e.target.value)}
          placeholder="Enter Admission Number"
          className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500"
        />

        <button
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          <Search size={18} />
          Search
        </button>

      </div>

      {/* Demo Student Card */}

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-800 p-5">

        <div className="flex flex-col gap-5 md:flex-row md:items-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-700">
            <User className="h-10 w-10 text-slate-300" />
          </div>

          <div className="grid flex-1 gap-3 sm:grid-cols-2">

            <Info title="Student Name" value="Rahul Sharma" />
            <Info title="Admission No" value="ADM1025" />
            <Info title="Class" value="XII A" />
            <Info title="Roll No" value="15" />
            <Info title="Father Name" value="Ramesh Sharma" />
            <Info title="Status" value="Active" />

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-1 font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}
