"use client";

import { Search } from "lucide-react";

export default function StudentFilters() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

      <div className="grid gap-4 lg:grid-cols-4">

        <div className="relative">

          <Search
            className="absolute left-4 top-3.5 text-slate-400"
            size={18}
          />

          <input
            placeholder="Search Student..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none"
          />

        </div>

        <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
          <option>All Classes</option>
        </select>

        <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
          <option>All Sections</option>
        </select>

        <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
          <option>All Status</option>
        </select>

      </div>

    </div>
  );
}