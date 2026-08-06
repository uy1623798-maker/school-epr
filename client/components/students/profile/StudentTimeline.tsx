
"use client";

import {
  CheckCircle2,
  BookOpen,
  CreditCard,
  FileText,
  UserPlus,
} from "lucide-react";

const timeline = [
  {
    title: "Attendance Marked",
    date: "Today • 09:15 AM",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Homework Submitted",
    date: "Yesterday • 05:40 PM",
    icon: BookOpen,
    color: "text-blue-500",
  },
  {
    title: "Fee Paid",
    date: "12 July 2026",
    icon: CreditCard,
    color: "text-emerald-500",
  },
  {
    title: "Transfer Certificate Requested",
    date: "08 July 2026",
    icon: FileText,
    color: "text-violet-500",
  },
  {
    title: "Student Registered",
    date: "01 April 2026",
    icon: UserPlus,
    color: "text-orange-500",
  },
];

export default function StudentTimeline() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Student Timeline
      </h2>

      <div className="space-y-8">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative flex gap-5"
            >
              {/* Timeline Line */}
              {index !== timeline.length - 1 && (
                <div className="absolute left-5 top-12 h-16 w-[2px] bg-slate-700" />
              )}

              {/* Icon */}
              <div
                className={`z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 ${item.color}`}
              >
                <Icon size={20} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {item.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}