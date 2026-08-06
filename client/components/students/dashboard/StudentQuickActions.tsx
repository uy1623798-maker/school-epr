"use client";

import {
  User,
  CalendarDays,
  BookOpen,
  FileText,
  CreditCard,
  Trophy,
} from "lucide-react";

const actions = [
  {
    title: "My Profile",
    icon: User,
    color: "bg-blue-600",
  },
  {
    title: "Attendance",
    icon: CalendarDays,
    color: "bg-green-600",
  },
  {
    title: "Homework",
    icon: BookOpen,
    color: "bg-orange-600",
  },
  {
    title: "Documents",
    icon: FileText,
    color: "bg-violet-600",
  },
  {
    title: "ID Card",
    icon: CreditCard,
    color: "bg-cyan-600",
  },
  {
    title: "Results",
    icon: Trophy,
    color: "bg-pink-600",
  },
];

export default function StudentQuickActions() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`flex flex-col items-center gap-3 rounded-2xl p-5 text-white transition hover:scale-105 ${item.color}`}
            >
              <Icon size={30} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}