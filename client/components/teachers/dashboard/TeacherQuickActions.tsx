"use client";

import Link from "next/link";
import {
  UserPlus,
  CalendarCheck,
  BookOpen,
  CalendarDays,
  Bell,
  FileText,
} from "lucide-react";

const actions = [
  {
    title: "Add Student",
    icon: UserPlus,
    href: "/dashboard/teacher/students/create",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Take Attendance",
    icon: CalendarCheck,
    href: "/dashboard/teacher/attendance",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Create Homework",
    icon: BookOpen,
    href: "/dashboard/teacher/homework/create",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Timetable",
    icon: CalendarDays,
    href: "/dashboard/teacher/timetable",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Notice Board",
    icon: Bell,
    href: "/dashboard/teacher/notices",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Generate TC",
    icon: FileText,
    href: "/dashboard/teacher/tc",
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function TeacherQuickActions() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-slate-500">
          Frequently used teacher tools
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 p-6">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group"
            >
              <div className="rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">

                <div
                  className={`mb-4 inline-flex rounded-2xl p-4 ${action.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                  {action.title}
                </h3>

              </div>
            </Link>
          );
        })}

      </div>

    </div>
  );
}