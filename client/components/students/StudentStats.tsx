"use client";

import {
  Users,
  UserCheck,
  UserMinus,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: 2456,
    color: "from-blue-600 to-cyan-500",
    icon: Users,
  },
  {
    title: "Active",
    value: 2380,
    color: "from-green-500 to-emerald-600",
    icon: UserCheck,
  },
  {
    title: "Inactive",
    value: 76,
    color: "from-red-500 to-pink-600",
    icon: UserMinus,
  },
  {
    title: "New Admission",
    value: 184,
    color: "from-violet-600 to-fuchsia-600",
    icon: GraduationCap,
  },
];

export default function StudentStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  {item.value}
                </h2>

              </div>

              <div
                className={`rounded-2xl bg-gradient-to-r ${item.color} p-4`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}