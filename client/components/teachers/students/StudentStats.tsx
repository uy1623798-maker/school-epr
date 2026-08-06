"use client";

import {
  GraduationCap,
  UserCheck,
  UserX,
  CalendarCheck,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "1,245",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Active",
    value: "1,188",
    icon: UserCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Inactive",
    value: "57",
    icon: UserX,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Attendance",
    value: "94%",
    icon: CalendarCheck,
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function StudentStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900">
                  {item.value}
                </h2>

              </div>

              <div className={`rounded-2xl p-4 ${item.color}`}>
                <Icon size={30} />
              </div>

            </div>
          </div>
        );

      })}

    </div>
  );
}