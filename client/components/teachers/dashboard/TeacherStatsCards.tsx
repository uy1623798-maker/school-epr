"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarCheck,
  BookOpen,
  ClipboardList,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "48",
    sub: "In Your Class",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Attendance",
    value: "44",
    sub: "Present Today",
    icon: CalendarCheck,
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    title: "Homework",
    value: "12",
    sub: "Pending Review",
    icon: BookOpen,
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  {
    title: "Assignments",
    value: "08",
    sub: "Due This Week",
    icon: ClipboardList,
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-100",
    text: "text-violet-600",
  },
];

export default function TeacherStatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
          >
            {/* Top Gradient */}
            <div className={`h-2 bg-gradient-to-r ${item.color}`} />

            <div className="p-6">
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-black text-slate-900">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.sub}
                  </p>
                </div>

                <div className={`${item.bg} rounded-2xl p-4`}>
                  <Icon
                    size={30}
                    className={item.text}
                  />
                </div>

              </div>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
}