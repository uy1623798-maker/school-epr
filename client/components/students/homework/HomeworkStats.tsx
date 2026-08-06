"use client";

import {
  BookOpen,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "Total Homework",
    value: "24",
    icon: BookOpen,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Pending",
    value: "06",
    icon: Clock3,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Submitted",
    value: "16",
    icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Overdue",
    value: "02",
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function HomeworkStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg}`}
              >
                <Icon className={item.iconColor} size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}