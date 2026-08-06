"use client";

import {
  CalendarCheck,
  BookOpen,
  IndianRupee,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Attendance",
    value: "94%",
    icon: CalendarCheck,
    color: "bg-green-600",
  },
  {
    title: "Pending Homework",
    value: "3",
    icon: BookOpen,
    color: "bg-blue-600",
  },
  {
    title: "Fees Due",
    value: "₹0",
    icon: IndianRupee,
    color: "bg-orange-600",
  },
  {
    title: "Overall Result",
    value: "91%",
    icon: Trophy,
    color: "bg-violet-600",
  },
];

export default function StudentStatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500"
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

              <div className={`rounded-2xl p-4 ${item.color}`}>

                <Icon
                  size={30}
                  className="text-white"
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}