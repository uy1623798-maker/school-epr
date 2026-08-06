"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";

const classes = [
  {
    subject: "Mathematics",
    className: "Class XII-A",
    room: "Room 204",
    time: "08:00 - 09:00",
    students: 48,
    active: false,
  },
  {
    subject: "Physics",
    className: "Class XI-B",
    room: "Physics Lab",
    time: "09:15 - 10:15",
    students: 42,
    active: true,
  },
  {
    subject: "Computer Science",
    className: "Class X-A",
    room: "Computer Lab",
    time: "10:30 - 11:30",
    students: 40,
    active: false,
  },
  {
    subject: "English",
    className: "Class IX-C",
    room: "Room 108",
    time: "12:00 - 01:00",
    students: 45,
    active: false,
  },
];

export default function TeacherTodayClasses() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Today's Classes
        </h2>

        <p className="mt-1 text-slate-500">
          Your teaching schedule for today
        </p>
      </div>

      <div className="space-y-4 p-6">

        {classes.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl border p-5 transition ${
              item.active
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.subject}
                </h3>

                <p className="mt-1 text-slate-500">
                  {item.className}
                </p>

              </div>

              {item.active && (
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  Live
                </span>
              )}

            </div>

            <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-600">

              <span className="flex items-center gap-2">
                <Clock size={16} />
                {item.time}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {item.room}
              </span>

              <span className="flex items-center gap-2">
                <Users size={16} />
                {item.students} Students
              </span>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}