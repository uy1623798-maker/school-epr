"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function HomeworkFilters() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
        <div className="relative flex-1">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search homework..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>

        <select className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-700 outline-none focus:border-blue-500">
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Science</option>
          <option>English</option>
          <option>Computer</option>
          <option>Hindi</option>
        </select>

        <select className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-700 outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Pending</option>
          <option>Submitted</option>
          <option>Overdue</option>
        </select>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <SlidersHorizontal size={18} />
          More Filters
        </button>
      </div>
    </div>
  );
}