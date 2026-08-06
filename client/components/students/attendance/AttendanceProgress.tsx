"use client";

export default function AttendanceProgress() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Attendance Percentage
      </h2>

      <div className="mt-10 flex justify-center">

        <div className="relative flex h-56 w-56 items-center justify-center">

          <svg
            className="-rotate-90"
            width="220"
            height="220"
          >
            <circle
              cx="110"
              cy="110"
              r="90"
              stroke="#e2e8f0"
              strokeWidth="14"
              fill="none"
            />

            <circle
              cx="110"
              cy="110"
              r="90"
              stroke="#2563eb"
              strokeWidth="14"
              fill="none"
              strokeDasharray="565"
              strokeDashoffset="28"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute text-center">

            <h2 className="text-5xl font-bold text-blue-600">
              95%
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Excellent
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}