"use client";

import { Search, RotateCcw } from "lucide-react";

export default function StudentFilters() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="grid gap-5 lg:grid-cols-5">

        {/* Search */}

        <div className="relative lg:col-span-2">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search student..."
            className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
          />

        </div>

        {/* Class */}

        <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">

          <option>All Classes</option>

          <option>VI</option>
          <option>VII</option>
          <option>VIII</option>
          <option>IX</option>
          <option>X</option>
          <option>XI</option>
          <option>XII</option>

        </select>

        {/* Section */}

        <select className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">

          <option>All Sections</option>

          <option>A</option>
          <option>B</option>
          <option>C</option>

        </select>

        {/* Reset */}

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">

          <RotateCcw size={18} />

          Reset

        </button>

      </div>

    </div>
  );
}