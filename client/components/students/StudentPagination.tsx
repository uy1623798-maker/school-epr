"use client";

export default function StudentPagination() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-4">
      <p className="text-sm text-slate-400">
        Showing <span className="font-semibold text-white">1-10</span> of{" "}
        <span className="font-semibold text-white">2456</span> students
      </p>

      <div className="flex gap-2">
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800">
          Previous
        </button>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
          1
        </button>

        <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800">
          2
        </button>

        <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800">
          3
        </button>

        <button className="rounded-lg border border-slate-700 px-4 py-2 text-white hover:bg-slate-800">
          Next
        </button>
      </div>
    </div>
  );
}