"use client";

import { useEffect, useMemo, useState } from "react";
import { LoaderCircle, Search } from "lucide-react";

import type { SelectedClass } from "@/app/dashboard/teacher/attendance/page";
import {
  getClasses,
  type AcademicClass,
} from "@/lib/api";

interface ClassSelectorProps {
  onSelect: (selectedClass: SelectedClass) => void;
}

export default function ClassSelector({ onSelect }: ClassSelectorProps) {
  const [classes, setClasses] = useState<AcademicClass[]>([]);
  const [classId, setClassId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getClasses()
      .then((data) => {
        if (active) setClasses(data);
      })
      .catch((loadError: unknown) => {
        if (active) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Unable to load classes.",
          );
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const selectedAcademicClass = useMemo(
    () => classes.find((item) => item.id === classId),
    [classes, classId],
  );

  const handleClassChange = (value: string) => {
    setClassId(value);
    setSectionId("");
  };

  const handleOpenStudents = () => {
    const section = selectedAcademicClass?.sections.find(
      (item) => item.id === sectionId,
    );

    if (!selectedAcademicClass || !section) {
      setError("Please select class and section.");
      return;
    }

    setError("");
    onSelect({
      classId: selectedAcademicClass.id,
      className: selectedAcademicClass.name,
      sectionId: section.id,
      sectionName: section.name,
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
            value={classId}
            disabled={loading}
            onChange={(event) => handleClassChange(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <option value="">
              {loading ? "Loading classes..." : "Choose class"}
            </option>

            {classes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
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
            value={sectionId}
            disabled={!selectedAcademicClass}
            onChange={(event) => setSectionId(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <option value="">Choose section</option>

            {selectedAcademicClass?.sections.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={handleOpenStudents}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" size={19} />
            ) : (
              <Search size={19} />
            )}
            Open Students
          </button>
        </div>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  );
}
