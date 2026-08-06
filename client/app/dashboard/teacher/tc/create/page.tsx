"use client";

import { FileText, Printer, Save } from "lucide-react";

import StudentSearch from "@/components/tc/StudentSearch";
import TcPreview from "@/components/tc/TcPreview";

export default function CreateTCPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Generate Transfer Certificate
          </h1>

          <p className="mt-2 text-slate-400">
            Search a student and generate a Transfer Certificate.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
            <Printer size={18} />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 font-semibold text-white hover:scale-105">
            <Save size={18} />
            Save TC
          </button>

        </div>

      </div>

      {/* Two Column Layout */}

      <div className="grid gap-8 xl:grid-cols-2">

        {/* Left Side */}

        <div className="space-y-8">

          <StudentSearch />

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl">

            <h2 className="mb-8 text-2xl font-bold text-white">
              Transfer Certificate Details
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <Input
                label="Issue Date"
                type="date"
              />

              <Input
                label="Last Attendance Date"
                type="date"
              />

              <Input
                label="Class Studied"
                placeholder="XII A"
              />

              <Input
                label="Promotion Status"
                placeholder="Promoted"
              />

            </div>

            {/* Conduct */}

            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-slate-300">
                Conduct
              </label>

              <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">

                <option>Excellent</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Average</option>

              </select>

            </div>

            {/* Reason */}

            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-slate-300">
                Reason For Leaving
              </label>

              <textarea
                rows={4}
                placeholder="Enter reason..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

            </div>

            {/* Remarks */}

            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-slate-300">
                Remarks
              </label>

              <textarea
                rows={3}
                placeholder="Additional remarks..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">

                <FileText size={18} />

                Generate PDF

              </button>

              <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700">

                Save Draft

              </button>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <TcPreview />

      </div>

    </div>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

    </div>
  );
}