
"use client";

import {
  CheckCircle2,
  XCircle,
  Clock3,
  Percent,
} from "lucide-react";

const stats = [
  {
    title: "Present",
    value: "182",
    color: "text-green-600",
    bg: "bg-green-100",
    icon: CheckCircle2,
  },
  {
    title: "Absent",
    value: "08",
    color: "text-red-600",
    bg: "bg-red-100",
    icon: XCircle,
  },
  {
    title: "Leave",
    value: "05",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    icon: Clock3,
  },
  {
    title: "Attendance",
    value: "95%",
    color: "text-blue-600",
    bg: "bg-blue-100",
    icon: Percent,
  },
];

export default function AttendanceStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
            >
              <Icon className={item.color} size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
              {item.value}
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-300">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}