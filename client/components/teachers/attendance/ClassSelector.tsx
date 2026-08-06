"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import type { SelectedClass } from "@/app/dashboard/teacher/attendance/page";

interface ClassSelectorProps {
  onSelect: (selectedClass: SelectedClass) => void;
}

const classes = ["VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const sections = ["A", "B", "C"];

export default function ClassSelector({
  onSelect,
}: ClassSelectorProps) {
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");

  const handleOpenStudents = () => {
    if (!className || !section) {
      window.alert("Please select class and section.");
      return;
    }

    onSelect({
      className,
      section,
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label
            htmlFor="className"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Select Class
          </label>

          <select
            id="className"
            value={className}
            onChange={(event) => setClassName(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500"
          >
            <option value="">Choose class</option>

            {classes.map((item) => (
              <option key={item} value={item}>
                Class {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="section"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Select Section
          </label>

          <select
            id="section"
            value={section}
            onChange={(event) => setSection(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500"
          >
            <option value="">Choose section</option>

            {sections.map((item) => (
              <option key={item} value={item}>
                Section {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={handleOpenStudents}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
          >
            <Search size={19} />
            Open Students
          </button>
        </div>
      </div>
    </div>
  );
}