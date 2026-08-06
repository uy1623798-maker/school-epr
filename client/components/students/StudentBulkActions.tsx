"use client";

import { Download, Trash2, Upload } from "lucide-react";

export default function StudentBulkActions() {
  return (
    <div className="flex flex-wrap gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-4">

      <button className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-500">
        <div className="flex items-center gap-2">
          <Trash2 size={18} />
          Delete Selected
        </div>
      </button>

      <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-500">
        <div className="flex items-center gap-2">
          <Download size={18} />
          Export Excel
        </div>
      </button>

      <button className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-500">
        <div className="flex items-center gap-2">
          <Upload size={18} />
          Import Students
        </div>
      </button>

    </div>
  );
}