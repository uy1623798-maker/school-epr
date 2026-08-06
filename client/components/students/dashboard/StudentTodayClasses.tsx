"use client";

const classes = [
  {
    time: "08:00 AM",
    subject: "Mathematics",
    teacher: "Mr. Sharma",
  },
  {
    time: "09:00 AM",
    subject: "Physics",
    teacher: "Mrs. Singh",
  },
  {
    time: "10:30 AM",
    subject: "Chemistry",
    teacher: "Mr. Verma",
  },
  {
    time: "12:00 PM",
    subject: "English",
    teacher: "Mrs. Gupta",
  },
];

export default function StudentTodayClasses() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Today's Classes
      </h2>

      <div className="space-y-4">
        {classes.map((item) => (
          <div
            key={item.time}
            className="flex items-center justify-between rounded-2xl bg-slate-800 p-4"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">
                {item.subject}
              </h3>

              <p className="text-slate-400">
                {item.teacher}
              </p>
            </div>

            <span className="rounded-xl bg-blue-600 px-4 py-2 text-white">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}