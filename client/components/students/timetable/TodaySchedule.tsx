"use client";

import {
  Clock,
  MapPin,
  User,
} from "lucide-react";

const classes = [
  {
    subject: "Mathematics",
    teacher: "Mr. Sharma",
    room: "Room 203",
    time: "08:00 - 09:00",
    current: false,
  },
  {
    subject: "Physics",
    teacher: "Mrs. Singh",
    room: "Physics Lab",
    time: "09:10 - 10:10",
    current: true,
  },
  {
    subject: "English",
    teacher: "Mrs. Gupta",
    room: "Room 107",
    time: "10:20 - 11:20",
    current: false,
  },
  {
    subject: "Computer",
    teacher: "Mr. Verma",
    room: "Computer Lab",
    time: "11:30 - 12:30",
    current: false,
  },
];

export default function TodaySchedule() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Today's Schedule
      </h2>

      <div className="space-y-5">

        {classes.map((item) => (
          <div
            key={item.time}
            className={`rounded-2xl border p-5 transition ${
              item.current
                ? "border-blue-500 bg-blue-50"
                : "border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h3 className="text-xl font-bold">
                  {item.subject}
                </h3>

                <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-600">

                  <span className="flex items-center gap-2">
                    <User size={16} />
                    {item.teacher}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {item.room}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {item.time}
                  </span>

                </div>

              </div>

              {item.current && (
                <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                  Ongoing
                </span>
              )}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}