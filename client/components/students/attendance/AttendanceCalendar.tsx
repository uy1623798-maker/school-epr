"use client";

const days = [
  "P","P","P","P","A","P","P",
  "P","L","P","P","P","P","P",
  "P","P","A","P","P","P","P",
  "P","P","P","L","P","P","P",
  "P","P"
];

export default function AttendanceCalendar() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Monthly Attendance
      </h2>

      <div className="mt-8 grid grid-cols-7 gap-3">

        {days.map((day, index) => (
          <div
            key={index}
            className={`flex h-12 items-center justify-center rounded-xl font-bold text-white

            ${
              day === "P"
                ? "bg-green-500"
                : day === "A"
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
          >
            {day}
          </div>
        ))}

      </div>

      <div className="mt-8 flex gap-6">

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-green-500"></div>
          <span>Present</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-red-500"></div>
          <span>Absent</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-yellow-500"></div>
          <span>Leave</span>
        </div>

      </div>

    </div>
  );
}