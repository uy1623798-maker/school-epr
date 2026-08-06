"use client";

import { Eye, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const homework = [
  {
    subject: "Mathematics",
    title: "Algebra Assignment",
    submissions: 15,
    due: "Today",
  },
  {
    subject: "Physics",
    title: "Newton's Laws",
    submissions: 12,
    due: "Tomorrow",
  },
  {
    subject: "English",
    title: "Essay Writing",
    submissions: 8,
    due: "2 Days Left",
  },
  {
    subject: "Computer",
    title: "HTML Project",
    submissions: 18,
    due: "Completed",
  },
];

export default function TeacherPendingHomework() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Homework Review
        </h2>

        <p className="mt-1 text-slate-500">
          Pending homework submissions
        </p>
      </div>

      <div className="space-y-4 p-6">

        {homework.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.subject}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <p className="mt-2 text-sm text-blue-600">
                  {item.submissions} Students Submitted
                </p>

              </div>

              <div className="text-right">

                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
                  {item.due}
                </span>

                <div className="mt-4 flex justify-end gap-2">

                  <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200">
                    <Eye size={18} />
                  </button>

                  <button className="rounded-xl bg-green-600 p-3 text-white hover:bg-green-700">
                    <CheckCircle2 size={18} />
                  </button>

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}